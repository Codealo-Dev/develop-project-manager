"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Quill from "quill";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";

const Delta = Quill.import("delta");

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { z } from "zod";

export const postsSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export default function Page() {
  const router = useRouter();
  const [isPending, startTransaction] = useTransition();
  const [value, setValue] = useState("");
  const form = useForm<z.infer<typeof postsSchema>>({
    resolver: zodResolver(postsSchema),
  });

  function onSubmit(values: z.infer<typeof postsSchema>) {
    startTransaction(async () => {
      await fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify({ ...values, content: value }),
      });
      router.replace("/");
    });
  }
  return (
    <>
      <h1 className="text-2xl mb-4">Crear Proyecto</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titulo</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription>
                  Escribe una descripcción corta de tu proyecto.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>Información del proyecto</FormLabel>
            <ReactQuill value={value} onChange={setValue} />
            <Button type="submit">Submit</Button>
          </FormItem>
        </form>
      </Form>
    </>
  );
}

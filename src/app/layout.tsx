import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "react-quill/dist/quill.snow.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Codealo | Encuentra Projectos",
  description: "Encuentra proyectos de código abierto para contribuir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Project Marketplace</h1>
            <Button variant="secondary" className="gap-2" asChild>
              <Link href="/create">
                <PlusIcon className="w-5 h-5" />
                Submit Project
              </Link>
            </Button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

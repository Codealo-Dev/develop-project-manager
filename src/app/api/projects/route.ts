import { postsTable } from "@/server/database/schema";
import { db } from "@/server/db";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();

  console.log(`Adding new post: ${body.title}`);
  console.log(body);

  const newEntry = await db
    .insert(postsTable)
    .values({
      title: body.title,
      description: body.description,
      content: body.content,
    })
    .returning();

  revalidatePath("/", "layout");

  return Response.json(newEntry);
}

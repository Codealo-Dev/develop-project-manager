"use server";

import { db } from "@/server/db";

export const getAllPosts = async () => {
  console.log("getAllPosts action called");
  return await db.query.postsTable.findMany();
};

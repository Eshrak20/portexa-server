import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";

// Create a comment
const createComment = async (data: Prisma.CommentCreateInput) => {
  return await prisma.comment.create({ data });
};

// Update a comment
const updateComment = async (id: number, content: string) => {
  return await prisma.comment.update({ where: { id }, data: { content } });
};

// Delete a comment
const deleteComment = async (id: number) => {
  return await prisma.comment.delete({ where: { id } });
};

// List comments for a blog
const listComments = async (blogId: number) => {
  return await prisma.comment.findMany({
    where: { blogId },
    orderBy: { created_at: "desc" },
  });
};

// Optional: Get single comment by ID
const getSingleComment = async (id: number) => {
  return await prisma.comment.findUnique({ where: { id } });
};

export const CommentService = {
  createComment,
  updateComment,
  deleteComment,
  listComments,
  getSingleComment,
};

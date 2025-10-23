import { prisma } from "../../config/db";
import { ViewService } from "../view/view.service";
import { Prisma } from "@prisma/client";

const createBlog = async (payload: Prisma.BlogCreateInput) => {
  const blog = await prisma.blog.create({ data: payload });
  return blog;
};

const getAllBlog = async () => {
  const blogs = await prisma.blog.findMany();

  const blogsWithStats = await Promise.all(
    blogs.map(async (blog) => {
      const likes = await prisma.like.count({ where: { blogId: blog.id } });
      const views = await prisma.view.count({ where: { blogId: blog.id } });

      //* Optionally, update read_time based on views (average duration)
      const avgReadTime = await ViewService.getAverageReadTime(blog.id);
      await prisma.blog.update({
        where: { id: blog.id },
        data: { read_time: parseInt(avgReadTime) }, // store as integer minutes
      });

      return {
        ...blog,
        likes,
        views,
        read_time: parseInt(avgReadTime),
      };
    })
  );

  return blogsWithStats;
};

const getSingleBlog = async (id: number) => {
  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog) return null;

  const likes = await prisma.like.count({ where: { blogId: id } });
  const views = await prisma.view.count({ where: { blogId: id } });

  //* Update read_time based on average duration
  const avgReadTime = await ViewService.getAverageReadTime(blog.id);
  await prisma.blog.update({
    where: { id: blog.id },
    data: { read_time: parseInt(avgReadTime) },
  });

  return {
    ...blog,
    likes,
    views,
    read_time: parseInt(avgReadTime),
  };
};

const deleteBlog = async (id: number) => {
  return await prisma.blog.delete({ where: { id } });
};

const updateBlog = async (id: number, payload: Prisma.BlogUpdateInput) => {
  return await prisma.blog.update({ where: { id }, data: payload });
};

export const BlogServices = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  deleteBlog,
  updateBlog,
};

import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";

const createBlog = async (payload: Prisma.BlogCreateInput) => {
    const createBlog = await prisma.blog.create({
        data: payload
    })
    return createBlog
}
const getAllBlog = async () => {
    const getAllBlog = await prisma.blog.findMany()
    return getAllBlog
}
const getSingleBlog = async (id: number) => {
    const getSingleBlog = await prisma.blog.findUnique({
        where: { id }
    })
    return getSingleBlog
}
const deleteBlog = async (id: number) => {
    const deleteBlog = await prisma.blog.delete({
        where: { id }
    })
    return deleteBlog
}
const updateBlog = async (id: number,payload: Prisma.BlogCreateInput) => {
    const updateBlog = await prisma.blog.update({
        where: { id },
        data: payload
    });
    return updateBlog
}

export const BlogServices = {
    createBlog,
    getAllBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog
};

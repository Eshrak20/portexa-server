import { prisma } from "../../config/db";

const toggleLike = async (blogId: number, ip_address: string) => {
  const existingLike = await prisma.like.findFirst({ where: { blogId, ip_address } });

  if (existingLike) {
    await prisma.like.delete({ where: { id: existingLike.id } });
    return { liked: false };
  } else {
    await prisma.like.create({ data: { blogId, ip_address } });
    return { liked: true };
  }
};

// Count total likes of a blog
const countLikes = async (blogId: number) => {
  return await prisma.like.count({ where: { blogId } });
};

// Optional: Get single like by ID
const getSingleLike = async (id: number) => {
  return await prisma.like.findUnique({ where: { id } });
};

export const LikeService = {
  toggleLike,
  countLikes,
  getSingleLike,
};

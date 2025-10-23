import { prisma } from "../../config/db";
import { IViewCreateInput } from "./view.type";

// ---------------- CREATE OR UPDATE VIEW ----------------
const createView = async (data: IViewCreateInput) => {
  const existing = await prisma.view.findFirst({
    where: { blogId: data.blogId, ip_address: data.ip_address },
  });

  if (!existing) {
    await prisma.view.create({ data });
  } else {
    //* If user revisits, update duration_seconds
    await prisma.view.update({
      where: { id: existing.id },
      data: { duration_seconds: existing.duration_seconds + data.duration_seconds },
    });
  }

  return { viewed: true };
};

// ---------------- COUNT TOTAL VIEWS ----------------
const countViews = async (blogId: number) => {
  return await prisma.view.count({ where: { blogId } });
};

// ---------------- AVERAGE READ TIME ----------------
const getAverageReadTime = async (blogId: number) => {
  const result = await prisma.view.aggregate({
    where: { blogId },
    _avg: { duration_seconds: true },
  });

  // Convert to minutes, rounded
  const avgSeconds = result._avg.duration_seconds ?? 0;
  const avgMinutes = Math.ceil(avgSeconds / 60);
  return `${avgMinutes} min`;
};

// ---------------- GET SINGLE VIEW ----------------
const getSingleView = async (id: number) => {
  return await prisma.view.findUnique({ where: { id } });
};

export const ViewService = {
  createView,
  countViews,
  getSingleView,
  getAverageReadTime,
};

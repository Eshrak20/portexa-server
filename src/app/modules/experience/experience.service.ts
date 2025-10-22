/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";

const createExperience = async (payload: Prisma.ExperienceCreateInput) => {
  const experience = await prisma.experience.create({ data: payload });
  return experience;
};

const getAllExperience = async () => {
  const experiences = await prisma.experience.findMany({
    include: { about: true }, // optional
  });
  return experiences;
};

const getSingleExperience = async (id: number) => {
  const experience = await prisma.experience.findUnique({
    where: { id },
    include: { about: true }, // optional
  });
  return experience;
};

const deleteExperience = async (id: number) => {
  const deletedExperience = await prisma.experience.delete({ where: { id } });
  return deletedExperience;
};

const updateExperience = async (id: number, payload: Prisma.ExperienceUpdateInput) => {
  const updatedExperience = await prisma.experience.update({ where: { id }, data: payload });
  return updatedExperience;
};

export const ExperienceServices = {
  createExperience,
  getAllExperience,
  getSingleExperience,
  deleteExperience,
  updateExperience,
};

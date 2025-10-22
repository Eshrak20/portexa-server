/* eslint-disable @typescript-eslint/no-explicit-any */

import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";

const createEducation = async (payload: Prisma.EducationCreateInput) => {
  const education = await prisma.education.create({
    data: payload,
  });
  return education;
};

const getAllEducation = async () => {
  const educations = await prisma.education.findMany({
    include: {
      about: true, // optional — include related About data
    },
  });
  return educations;
};

const getSingleEducation = async (id: number) => {
  const education = await prisma.education.findUnique({
    where: { id },
    include: {
      about: true, // optional
    },
  });
  return education;
};

const deleteEducation = async (id: number) => {
  const deletedEducation = await prisma.education.delete({
    where: { id },
  });
  return deletedEducation;
};

const updateEducation = async (
  id: number,
  payload: Prisma.EducationUpdateInput
) => {
  const updatedEducation = await prisma.education.update({
    where: { id },
    data: payload,
  });
  return updatedEducation;
};

export const EducationServices = {
  createEducation,
  getAllEducation,
  getSingleEducation,
  deleteEducation,
  updateEducation,
};

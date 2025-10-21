/* eslint-disable @typescript-eslint/no-explicit-any */

import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";


const createProject = async (payload: Prisma.ProjectCreateInput) => {
  const createProject = await prisma.project.create({
    data: payload
  })
  return createProject
};
const getAllProject = async () => {
  const getAllProject = await prisma.project.findMany();
  return getAllProject;

};
const getSingleProject = async (id: number) => {
  const getSingleProject = await prisma.project.findUnique({
    where: { id },
  });
  return getSingleProject;

};
const deleteProject = async (id: number) => {
  const deleteProject = await prisma.project.delete({
    where: { id },

  });
  return deleteProject;

};
const updateProject = async (id: number, payload: Prisma.ProjectCreateInput) => {
  const updateProject = await prisma.project.update({
    where: { id },
    data: payload
  });
  return updateProject;

};


export const ProjectServices = {
  createProject,
  getAllProject,
  getSingleProject,
  deleteProject,
  updateProject
};

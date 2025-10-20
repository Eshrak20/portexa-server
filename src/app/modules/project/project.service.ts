/* eslint-disable @typescript-eslint/no-explicit-any */

import { IProject } from "./project.type";
import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";


const createProject = async (payload: Prisma.ProjectCreateInput) => {
  const createProject = await prisma.project.create({
    data: payload
  })
  console.log(createProject)
  return createProject

};





export const ProjectServices = {
  createProject,
};

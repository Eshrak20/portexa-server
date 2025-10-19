/* eslint-disable @typescript-eslint/no-explicit-any */

import { IProject } from "./project.type";
import { prisma } from "../../config/db";


const createProject = async (payload: Partial<IProject>) => {
  const createProject = await prisma.project.create({
    data: payload
  })
  console.log(createProject)
  return createProject

};





export const ProjectServices = {
  createProject,
};

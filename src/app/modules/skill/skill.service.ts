/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";

const createSkill = async (payload: Prisma.SkillCreateInput) => {
  const skill = await prisma.skill.create({ data: payload });
  return skill;
};

const getAllSkill = async () => {
  const skills = await prisma.skill.findMany({
    include: { about: true }, // optional
  });
  return skills;
};

const getSingleSkill = async (id: number) => {
  const skill = await prisma.skill.findUnique({
    where: { id },
    include: { about: true }, // optional
  });
  return skill;
};

const deleteSkill = async (id: number) => {
  const deletedSkill = await prisma.skill.delete({ where: { id } });
  return deletedSkill;
};

const updateSkill = async (id: number, payload: Prisma.SkillUpdateInput) => {
  const updatedSkill = await prisma.skill.update({ where: { id }, data: payload });
  return updatedSkill;
};

export const SkillServices = {
  createSkill,
  getAllSkill,
  getSingleSkill,
  deleteSkill,
  updateSkill,
};

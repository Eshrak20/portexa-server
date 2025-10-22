/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";

const createSocialLink = async (payload: Prisma.SocialLinkCreateInput) => {
  const result = await prisma.socialLink.create({ data: payload });
  return result;
};

const getAllSocialLinks = async () => {
  const result = await prisma.socialLink.findMany();
  return result;
};

const getSingleSocialLink = async (id: number) => {
  const result = await prisma.socialLink.findUnique({ where: { id } });
  return result;
};

const deleteSocialLink = async (id: number) => {
  const result = await prisma.socialLink.delete({ where: { id } });
  return result;
};

const updateSocialLink = async (
  id: number,
  payload: Prisma.SocialLinkUpdateInput
) => {
  const result = await prisma.socialLink.update({
    where: { id },
    data: payload,
  });
  return result;
};

export const SocialLinkServices = {
  createSocialLink,
  getAllSocialLinks,
  getSingleSocialLink,
  deleteSocialLink,
  updateSocialLink,
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";

const createMessage = async (payload: Prisma.MessageCreateInput) => {
  const result = await prisma.message.create({ data: payload });
  return result;
};

const getAllMessages = async () => {
  const result = await prisma.message.findMany();
  return result;
};

const getSingleMessage = async (id: number) => {
  const result = await prisma.message.findUnique({ where: { id } });
  return result;
};

const deleteMessage = async (id: number) => {
  const result = await prisma.message.delete({ where: { id } });
  return result;
};

export const MessageServices = {
  createMessage,
  getAllMessages,
  getSingleMessage,
  deleteMessage,
};

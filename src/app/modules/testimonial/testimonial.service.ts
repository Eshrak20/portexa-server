/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";

const createTestimonial = async (payload: Prisma.TestimonialCreateInput) => {
  const result = await prisma.testimonial.create({ data: payload });
  return result;
};

const getAllTestimonials = async () => {
  const result = await prisma.testimonial.findMany();
  return result;
};

const getSingleTestimonial = async (id: number) => {
  const result = await prisma.testimonial.findUnique({ where: { id } });
  return result;
};

const deleteTestimonial = async (id: number) => {
  const result = await prisma.testimonial.delete({ where: { id } });
  return result;
};

const updateTestimonial = async (id: number, payload: Prisma.TestimonialUpdateInput) => {
  const result = await prisma.testimonial.update({ where: { id }, data: payload });
  return result;
};

export const TestimonialServices = {
  createTestimonial,
  getAllTestimonials,
  getSingleTestimonial,
  deleteTestimonial,
  updateTestimonial,
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { TestimonialServices } from "./testimonial.service";

const createTestimonial = catchAsync(async (req: Request, res: Response) => {
  const result = await TestimonialServices.createTestimonial(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Testimonial created successfully",
    data: result,
  });
});

const getAllTestimonials = catchAsync(async (req: Request, res: Response) => {
  const result = await TestimonialServices.getAllTestimonials();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Testimonials retrieved successfully",
    data: result,
  });
});

const getSingleTestimonial = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await TestimonialServices.getSingleTestimonial(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Testimonial retrieved successfully",
    data: result,
  });
});

const deleteTestimonial = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await TestimonialServices.deleteTestimonial(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Testimonial deleted successfully",
    data: result,
  });
});

const updateTestimonial = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await TestimonialServices.updateTestimonial(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Testimonial updated successfully",
    data: result,
  });
});

export const TestimonialControllers = {
  createTestimonial,
  getAllTestimonials,
  getSingleTestimonial,
  deleteTestimonial,
  updateTestimonial,
};

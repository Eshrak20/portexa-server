/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await BlogServices.createBlog(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Blog created successfully",
      data: result,
    });
  }
);
const getAllBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await BlogServices.getAllBlog();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "All Blog retrieved successfully",
      data: result,
    });
  }
);
const getSingleBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await BlogServices.getSingleBlog(convertedId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Single Blog retrieved successfully",
      data: result,
    });
  }
);
const deleteBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await BlogServices.deleteBlog(convertedId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Blog deleted successfully",
      data: result,
    });
  }
);
const updateBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await BlogServices.updateBlog(convertedId,req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Blog updated successfully",
      data: result,
    });
  }
);

export const BlogControllers = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  deleteBlog,
  updateBlog

};

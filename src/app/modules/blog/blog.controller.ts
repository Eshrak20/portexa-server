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

export const BlogControllers = {
  createBlog,
};

import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ViewService } from "./view.service";

const createView = catchAsync(async (req: Request, res: Response) => {
  const result = await ViewService.createView(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "View created successfully",
    data: result,
  });
});

const countViews = catchAsync(async (req: Request, res: Response) => {
  const blogId = Number(req.params.blogId);
  const count = await ViewService.countViews(blogId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "View count retrieved successfully",
    data: { count },
  });
});

export const ViewController = {
  createView,
  countViews,
};

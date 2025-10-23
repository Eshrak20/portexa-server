/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { LikeService } from "./like.service";

const toggleLike = catchAsync(async (req: Request, res: Response) => {
  const { blogId, ip_address } = req.body;
  const result = await LikeService.toggleLike(blogId, ip_address);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: result.liked ? "Like added successfully" : "Like removed successfully",
    data: result,
  });
});

const countLikes = catchAsync(async (req: Request, res: Response) => {
  const blogId = Number(req.params.blogId);
  const count = await LikeService.countLikes(blogId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Likes count retrieved successfully",
    data: { count },
  });
});

export const LikeController = {
  toggleLike,
  countLikes,
};

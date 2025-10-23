/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CommentService } from "./comment.service";

const createComment = catchAsync(async (req: Request, res: Response) => {
  const result = await CommentService.createComment(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Comment added successfully",
    data: result,
  });
});

const updateComment = catchAsync(async (req: Request, res: Response) => {
  const { id, content } = req.body;
  const updated = await CommentService.updateComment(id, content);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comment updated successfully",
    data: updated,
  });
});

const deleteComment = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await CommentService.deleteComment(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Comment deleted successfully",
    data: result,
  });
});

const listComments = catchAsync(async (req: Request, res: Response) => {
  const blogId = Number(req.params.blogId);
  const comments = await CommentService.listComments(blogId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comments retrieved successfully",
    data: comments,
  });
});

export const CommentController = {
  createComment,
  updateComment,
  deleteComment,
  listComments,
};

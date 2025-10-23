/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { MessageServices } from "./message.service";

const createMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageServices.createMessage(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Message sent successfully",
    data: result,
  });
});

const getAllMessages = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageServices.getAllMessages();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Messages retrieved successfully",
    data: result,
  });
});

const getSingleMessage = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await MessageServices.getSingleMessage(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Message retrieved successfully",
    data: result,
  });
});

const deleteMessage = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await MessageServices.deleteMessage(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Message deleted successfully",
    data: result,
  });
});

export const MessageControllers = {
  createMessage,
  getAllMessages,
  getSingleMessage,
  deleteMessage,
};

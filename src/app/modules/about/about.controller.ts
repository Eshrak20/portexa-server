/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AboutServices } from "./about.service";

const createAbout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AboutServices.createAbout(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "About created successfully",
      data: result,
    });
  }
);
const getAbout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AboutServices.getAbout();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "About retrieved successfully",
      data: result,
    });
  }
);

const deleteAbout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await AboutServices.deleteAbout(convertedId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "About deleted successfully",
      data: result,
    });
  }
);
const updateAbout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await AboutServices.updateAbout(convertedId, req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "About updated successfully",
      data: result,
    });
  }
);

export const AboutControllers = {
  createAbout,
  getAbout,
  deleteAbout,
  updateAbout
};

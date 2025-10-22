/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { EducationServices } from "./education.service";

const createEducation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await EducationServices.createEducation(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Education created successfully",
      data: result,
    });
  }
);

const getAllEducation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await EducationServices.getAllEducation();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Educations retrieved successfully",
      data: result,
    });
  }
);

const getSingleEducation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await EducationServices.getSingleEducation(convertedId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Single education retrieved successfully",
      data: result,
    });
  }
);

const deleteEducation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await EducationServices.deleteEducation(convertedId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Education deleted successfully",
      data: result,
    });
  }
);

const updateEducation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await EducationServices.updateEducation(convertedId, req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Education updated successfully",
      data: result,
    });
  }
);

export const EducationControllers = {
  createEducation,
  getAllEducation,
  getSingleEducation,
  deleteEducation,
  updateEducation,
};

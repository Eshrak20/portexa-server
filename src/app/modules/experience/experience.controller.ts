/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.service";

const createExperience = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ExperienceServices.createExperience(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Experience created successfully",
      data: result,
    });
  }
);

const getAllExperience = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ExperienceServices.getAllExperience();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Experiences retrieved successfully",
      data: result,
    });
  }
);

const getSingleExperience = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await ExperienceServices.getSingleExperience(convertedId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Single experience retrieved successfully",
      data: result,
    });
  }
);

const deleteExperience = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await ExperienceServices.deleteExperience(convertedId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Experience deleted successfully",
      data: result,
    });
  }
);

const updateExperience = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await ExperienceServices.updateExperience(convertedId, req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Experience updated successfully",
      data: result,
    });
  }
);

export const ExperienceControllers = {
  createExperience,
  getAllExperience,
  getSingleExperience,
  deleteExperience,
  updateExperience,
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const createProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProjectServices.createProject(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Project created successfully",
      data: result,
    });
  }
);
const getAllProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProjectServices.getAllProject();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Project retrieved successfully",
      data: result,
    });
  }
);
const getSingleProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await ProjectServices.getSingleProject(convertedId);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Single Project retrieved successfully",
      data: result,
    });
  }
);
const deleteProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await ProjectServices.deleteProject(convertedId);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Single Project deleted successfully",
      data: result,
    });
  }
);
const updateProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await ProjectServices.updateProject(convertedId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Project updated successfully",
      data: result,
    });
  }
);

export const ProjectControllers = {
  createProject,
  getAllProject,
  getSingleProject,
  deleteProject,
  updateProject,
};

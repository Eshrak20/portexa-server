/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

const createSkill = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await SkillServices.createSkill(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Skill created successfully",
      data: result,
    });
  }
);

const getAllSkill = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await SkillServices.getAllSkill();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Skills retrieved successfully",
      data: result,
    });
  }
);

const getSingleSkill = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await SkillServices.getSingleSkill(convertedId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Single skill retrieved successfully",
      data: result,
    });
  }
);

const deleteSkill = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await SkillServices.deleteSkill(convertedId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Skill deleted successfully",
      data: result,
    });
  }
);

const updateSkill = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const convertedId = Number(req.params.id);
    const result = await SkillServices.updateSkill(convertedId, req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Skill updated successfully",
      data: result,
    });
  }
);

export const SkillControllers = {
  createSkill,
  getAllSkill,
  getSingleSkill,
  deleteSkill,
  updateSkill,
};

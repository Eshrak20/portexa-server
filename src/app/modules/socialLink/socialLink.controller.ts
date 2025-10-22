/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SocialLinkServices } from "./socialLink.service";

const createSocialLink = catchAsync(async (req: Request, res: Response) => {
  const result = await SocialLinkServices.createSocialLink(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Social link created successfully",
    data: result,
  });
});

const getAllSocialLinks = catchAsync(async (req: Request, res: Response) => {
  const result = await SocialLinkServices.getAllSocialLinks();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Social links retrieved successfully",
    data: result,
  });
});

const getSingleSocialLink = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await SocialLinkServices.getSingleSocialLink(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Social link retrieved successfully",
    data: result,
  });
});

const deleteSocialLink = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await SocialLinkServices.deleteSocialLink(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Social link deleted successfully",
    data: result,
  });
});

const updateSocialLink = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await SocialLinkServices.updateSocialLink(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Social link updated successfully",
    data: result,
  });
});

export const SocialLinkControllers = {
  createSocialLink,
  getAllSocialLinks,
  getSingleSocialLink,
  deleteSocialLink,
  updateSocialLink,
};

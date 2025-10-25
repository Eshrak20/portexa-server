// modules/user/user.controller.ts
import { Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "./user.service";
import { createUserSchema, updateUserSchema } from "./user.validation";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const validated = createUserSchema.parse(req.body);
    const user = await createUser(validated);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

export const getUserController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await getUserById(id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const validated = updateUserSchema.parse(req.body);
    const updated = await updateUser(id, validated);
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await deleteUser(id);
  res.status(204).send();
};

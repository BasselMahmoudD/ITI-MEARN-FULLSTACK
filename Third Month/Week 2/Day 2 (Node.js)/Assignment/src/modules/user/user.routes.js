import express from "express";
import {
  addUser,
  deleteUser,
  getAllUser,
  getSpecificUser,
  updateUser,
} from "./user.controller.js";

const userRouter = express.Router();
userRouter.get("/", getAllUser);
userRouter.get("/:id", getSpecificUser);
userRouter.post("/", addUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

export default userRouter;

import express from "express";
import {
  deleteUser,
  getAllUser,
  getSpecificUser,
  updateUser,
} from "./user.controller.js";
import { auth } from "../../middleware/auth.middleware.js";
import { checkRole } from "../../middleware/checkRole.middleware.js";

const userRouter = express.Router();
userRouter.get("/", auth(), checkRole(), getAllUser);
userRouter.get("/:id", auth(), checkRole(), getSpecificUser);
userRouter.delete("/:id", auth(), checkRole(), deleteUser);
userRouter.put("/:id", auth(), updateUser);

export default userRouter;

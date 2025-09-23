import express from "express";
import {
  addCourse,
  deleteCourse,
  getAllCourse,
  getSpecificCourse,
  updateCourse,
} from "./course.controller.js";
import { validate } from "../../middleware/validations.js";
import { courseSchema } from "./courseValidations.js";

const courseRouter = express.Router();
courseRouter.get("/", getAllCourse);
courseRouter.get("/:id", getSpecificCourse);
courseRouter.post("/",validate(courseSchema), addCourse);
courseRouter.delete("/:id", deleteCourse);
courseRouter.put("/:id", validate(courseSchema), updateCourse);

export default courseRouter;

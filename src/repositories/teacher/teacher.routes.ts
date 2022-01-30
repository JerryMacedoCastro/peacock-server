import TeacherController from "./teacher.controller";
import { Router } from "express";

const teacherRoutes = Router();
const teacherController = new TeacherController();

teacherRoutes.get("/", teacherController.getAllTeachers);
teacherRoutes.post("/", teacherController.createTeacher);

export default teacherRoutes;

import TeacherController from "./teacher.controller";
import { Router } from "express";

const teacherRoutes = Router();
const teacherController = new TeacherController();

teacherRoutes.get("/", teacherController.getAllTeachers);
teacherRoutes.get("/getByName", teacherController.getTeacherByName);
teacherRoutes.post("/", teacherController.createTeacher);
teacherRoutes.put("/", teacherController.putTeacher);
teacherRoutes.delete("/", teacherController.deleteTeacher);

export default teacherRoutes;

import { TeacherController } from "./teacher.controller";
import { Router } from "express";

const teacherRoutes = Router();
const teacherController = new TeacherController();

teacherRoutes.get("/", teacherController.getAllTeachers);
teacherRoutes.get("/byName", teacherController.getTeacherByName);
teacherRoutes.post("/", teacherController.postTeacher);
teacherRoutes.put("/", teacherController.putTeacher);
teacherRoutes.delete("/", teacherController.deleteTeacher);

export default teacherRoutes;

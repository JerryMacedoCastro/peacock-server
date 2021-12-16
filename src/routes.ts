import express, { Router } from "express";
import classRoutes from "./repositories/class/class.route";
import teacherRoutes from "./repositories/teacher/teacher.route";
import roadMapRoutes from "./repositories/roadMap/roadMap.route";


const routes = Router();

routes.use("/class", classRoutes);
routes.use("/teacher", teacherRoutes);
routes.use("/roadMap", roadMapRoutes);

export default routes;

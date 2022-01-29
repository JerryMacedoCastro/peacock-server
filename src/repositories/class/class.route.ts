import { ClassController } from "./class.controller";
import { Router } from "express";

const classRoutes = Router();
const classController = new ClassController();

classRoutes.get("/", classController.getAllClasses);

export default classRoutes;

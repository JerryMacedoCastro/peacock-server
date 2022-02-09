import ClassController from "./class.controller";
import { Router } from "express";
const classRoutes = Router();

const classController = new ClassController();
classRoutes.get("/", classController.getAllClasses);
classRoutes.get("/getByUser", classController.getAllClassByUser);
classRoutes.post("/", classController.createClass);
classRoutes.put("/", classController.putClass);
classRoutes.delete("/", classController.deleteClass);

export default classRoutes;

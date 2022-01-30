import { Router } from "express";
import classRoutes from "./repositories/class/class.route";
import teacherRoutes from "./repositories/teacher/teacher.route";

const routes = Router();

routes.get("/", (_req, res) => {
  res.send("Hello darkness my old friend!");
});

routes.use("/class", classRoutes);
routes.use("/teacher", teacherRoutes);

export default routes;

import { Router } from "express";
import classRoutes from "./repositories/class/class.routes";
import rodaMapRoutes from "./repositories/roadMap/roadMap.routes";
import teacherRoutes from "./repositories/teacher/teacher.routes";
import userRoutes from "./repositories/user/user.routes";

const routes = Router();

routes.get("/", (_req, res) => {
  res.send("Hello darkness my old friend!");
});

routes.use("/class", classRoutes);
routes.use("/teacher", teacherRoutes);
routes.use("/user", userRoutes);
routes.use("/roadMap", rodaMapRoutes);

export default routes;

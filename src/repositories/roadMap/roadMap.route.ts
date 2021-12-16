import { RoadMapController } from "./roadMap.controller";
import { Router } from "express";

const roadMapRoutes = Router();
const roadMapController = new RoadMapController();

roadMapRoutes.get("/", roadMapController.getAllRoadMaps);
roadMapRoutes.get("/byId", roadMapController.getRoadMapById);
roadMapRoutes.post("/", roadMapController.postRoadMap);
roadMapRoutes.put("/", roadMapController.putRoadMap);
roadMapRoutes.delete("/", roadMapController.deleteRoadMap);

export default roadMapRoutes;

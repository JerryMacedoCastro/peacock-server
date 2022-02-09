import { RoadMapController } from "./roadMap.controller";
import { Router } from "express";
const rodaMapRoutes = Router();

const roadMapController = new RoadMapController();
rodaMapRoutes.get("/", roadMapController.getAllRoadMaps);
rodaMapRoutes.post("/", roadMapController.postRoadMap);
rodaMapRoutes.put("/", roadMapController.putRoadMap);
rodaMapRoutes.delete("/", roadMapController.deleteRoadMap);

export default rodaMapRoutes;

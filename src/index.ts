import express from "express";
import { createConnection, getConnectionManager } from "typeorm";
import config from "../ormconfig";
import App from "./app";

import { TeacherController } from "./repositories/teacher/teacher.controller";
import { ClassController } from "./repositories/class/class.controller";
import { RoadMapController } from "./repositories/roadMap/roadMap.controller";

(async () => {
  try {
    await createConnection(config);
    const manager = getConnectionManager().get();
    const app = new App(manager);

    app.listen();
  } catch (error) {
    console.log("Error while connecting to the database");
    console.log(error);
  }
})();

import express from "express";
import { createConnection } from 'typeorm';
import config from "../ormconfig";
import App from "./app";

import { TeacherController } from "../orm/teacher/teacher.controller";
import { ClassController } from "../orm/class/class.controller";
import { RoadMapController } from "../orm/roadMap/roadMap.controller";

(async () => {
  try {
    await createConnection(config);

  } catch (error) {
    console.log('Error while connecting to the database');
    console.log(error)
  }
  const app = new App([
    new TeacherController(),
    new ClassController(),
    new RoadMapController()
  ]);

  app.listen();
})();
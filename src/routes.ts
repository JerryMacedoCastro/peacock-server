import express, { Router } from "express";
import classRoutes from "./repositories/class/class.route";

const routes = Router();

routes.use("/class", classRoutes);

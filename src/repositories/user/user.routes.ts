import UserController from "./uer.controller";
import { Router } from "express";

const userRoutes = Router();
const userController = new UserController();

userRoutes.get("/", userController.getUsers);
userRoutes.post("/", userController.createUser);

export default userRoutes;

import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userController = new UserController();

const usersRoutes = Router();


usersRoutes.post("/", userController.createUser);

export default usersRoutes;

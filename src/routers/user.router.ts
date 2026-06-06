import { Router } from "express";
import { findAllUsers } from "../controllers/user.controller.js";

export const userRouter: Router = Router(); // we will see the router after /users

userRouter.get('/', findAllUsers); // if there is nothing after /api/users and it is a GET request, findAllUsers will be called
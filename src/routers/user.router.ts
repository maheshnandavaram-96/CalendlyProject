import { Router } from "express";
import { createUser, deleteUser, findAllUsers, findById, updateUser } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema, updateUserSchema } from "../dtos/user.dto.js";

export const userRouter: Router = Router(); // we will see the router after /users

userRouter.get('/', findAllUsers); // if there is nothing after /api/users and it is a GET request, findAllUsers will be called
userRouter.get('/:id', findById);
userRouter.post('/', validate(createUserSchema) ,createUser);
userRouter.patch('/:id', validate(updateUserSchema), updateUser);
userRouter.delete('/:id', deleteUser);
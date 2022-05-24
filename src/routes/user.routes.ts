
import { authUser } from './../middlewares/authUser.middleware';
import { Router } from "express";

const routes = Router();

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller"
import userLoginController from "../controllers/users/userLogin.controller"
import userDeleteSelfController from '../controllers/users/userDeleteSelf.controller';
import userUpdatePasswordController from '../controllers/users/userUpdatePassword.controller';

import {userCreateSchema } from "../middlewares/validateUserCreate.middleware"
import { validateUserCreate } from "../middlewares/validateUserCreate.middleware";

routes.post('/users', validateUserCreate(userCreateSchema), userCreateController)

routes.post("/users/login", userLoginController);

routes.get("/users", authUser, userListController);
routes.get("/users/me", authUser,  userListOneController);

routes.patch("/users/me/updatepassword", authUser, userUpdatePasswordController);

routes.delete("/users/me", authUser, userDeleteSelfController);

export default routes;


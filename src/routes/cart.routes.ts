import { authUser } from './../middlewares/authUser.middleware';
import { Router } from "express";

import cartCreateController from "../controllers/cart/cartAddProd.controller";
import cartDelProdController from "../controllers/cart/cartDelProd.controller";

const routes = Router();

export const cartRoutes = () => {
    routes.post("/", authUser, cartCreateController);
    routes.delete("/:product_id", authUser, cartDelProdController)

    return routes;
};
import { Router } from "express";
import { deleteCart, getCart, postCart } from "../controllers/cartController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";
import validateProductSchemaMiddleware from "../middlewares/validateProductSchemaMiddleware.js";
import validateUserCartMiddleware from "../middlewares/validateUserCartMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateTokenMiddleware);

cartRouter.get("/cart", getCart);
cartRouter.post("/cart", validateProductSchemaMiddleware, postCart);
cartRouter.delete("/cart", validateUserCartMiddleware, deleteCart);

export default cartRouter;
import { Router } from "express";
import { getCart, postCart } from "../controllers/cartController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";
import validateProductSchemaMiddleware from "../middlewares/validateProductSchemaMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateTokenMiddleware);

cartRouter.get("/cart", getCart);
cartRouter.post("/cart", validateProductSchemaMiddleware, postCart);

export default cartRouter;
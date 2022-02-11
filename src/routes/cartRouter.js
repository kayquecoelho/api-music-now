import { Router } from "express";
import { getCart, postCart } from "../controllers/cartController";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware";
import validateProductSchemaMiddleware from "../middlewares/validateProductSchemaMiddleware";

const cartRouter = Router();

cartRouter.use(validateTokenMiddleware);

cartRouter.get("/cart", getCart);
cartRouter.post("/cart", validateProductSchemaMiddleware, postCart);

export default cartRouter;
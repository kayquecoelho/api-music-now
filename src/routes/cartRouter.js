import { Router } from "express";
import { changeQuantity, getCart, postCart } from "../controllers/cartController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";
import validateProductSchemaMiddleware from "../middlewares/validateProductSchemaMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateTokenMiddleware);

cartRouter.get("/cart", getCart);
cartRouter.post("/cart", validateProductSchemaMiddleware, postCart);
cartRouter.put("/cart/:id", changeQuantity)

export default cartRouter;
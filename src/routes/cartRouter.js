import { Router } from "express";
import { changeQuantity, deleteProduct, getCart, postCart } from "../controllers/cartController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";
import validateProductSchemaMiddleware from "../middlewares/validateProductSchemaMiddleware.js";
import validateQuantityMiddleware from "../middlewares/validateQuantityMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateTokenMiddleware);

cartRouter.get("/cart", getCart);
cartRouter.post("/cart", validateProductSchemaMiddleware, postCart);
cartRouter.put("/cart/:id", validateQuantityMiddleware, changeQuantity);
cartRouter.delete("/cart/:id", deleteProduct);

export default cartRouter;
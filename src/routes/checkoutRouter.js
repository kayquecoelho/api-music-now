import { Router } from "express";
import { postCheckout } from "../controllers/checkoutController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";
import validadeUserCartMiddleware from "../middlewares/validateUserCartMiddleware.js";

const checkoutRouter = Router();

checkoutRouter.use(validateTokenMiddleware);

checkoutRouter.post("/checkout", validadeUserCartMiddleware, postCheckout);

export default checkoutRouter;
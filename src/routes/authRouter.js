import { Router } from "express";
import { signIn, register } from "../controllers/authController.js";
import validateLoginSchemaMiddleware from "../middlewares/validateLoginSchemaMiddleware.js";
import validateUserSchemaMiddleware from "../middlewares/validateUserSchemaMiddleware.js";

const authRouter = Router();

authRouter.post('/sign-in', validateLoginSchemaMiddleware, signIn);
authRouter.post("/sign-up", validateUserSchemaMiddleware, register);

export default authRouter;
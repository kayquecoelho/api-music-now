import { Router } from "express";
import { signIn, register } from "../controllers/authController.js";
import validateLoginSchemaMiddleware from "../middlewares/validateLoginSchemaMiddleware.js";
import { validateUserSchema } from "../middlewares/validateUserSchema.js";

const authRouter = Router();

authRouter.post('/sign-in', validateLoginSchemaMiddleware, signIn);
authRouter.post("/sign-up", validateUserSchema, register);

export default authRouter;
import { Router } from "express";
import { signIn } from "../controllers/authController.js";
import validateLoginSchemaMiddleware from "../middlewares/validateLoginSchemaMiddleware.js";

const authRouter = Router();

authRouter.post('/sign-in', validateLoginSchemaMiddleware, signIn);

export default authRouter;
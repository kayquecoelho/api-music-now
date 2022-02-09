import { Router } from "express";
import { register } from "../controllers/authController.js";
import { validateUserSchema } from "../middlewares/validateUserSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", validateUserSchema, register);

export default authRouter;
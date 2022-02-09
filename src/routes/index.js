import { Router } from "express";
import authRouter from "./authrouter.js";

const router = Router();

router.use(authRouter)

export default router;
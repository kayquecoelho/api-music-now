import { Router } from "express";
import artistsRouter from "./artistsRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use(authRouter);
router.use(artistsRouter);

export default router;

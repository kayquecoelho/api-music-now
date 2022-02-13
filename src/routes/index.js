import { Router } from "express";
import artistsRouter from "./artistsRouter.js";
import authRouter from "./authRouter.js";
import productsRouter from "./productsRouter.js";
import cartRouter from "./cartRouter.js";
import checkout from "./checkoutRouter.js";

const router = Router();

router.use(authRouter);
router.use(artistsRouter);
router.use(productsRouter);
router.use(cartRouter);
router.use(checkout);

export default router;

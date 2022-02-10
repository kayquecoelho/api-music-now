import { Router } from "express";
import { getProduct } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products/:id", getProduct);

export default productsRouter;
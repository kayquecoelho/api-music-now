import { Router } from "express";
import { products } from "../controllers/productsController.js"

const productsRouter = Router();

productsRouter.get('/products', products);

export default productsRouter;
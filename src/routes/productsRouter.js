import { Router } from "express";
import { getProduct, products } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products/:id", getProduct);
productsRouter.get('/products', products);

export default productsRouter;
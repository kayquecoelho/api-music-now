import { Router } from "express";
import { getArtistProduct, getArtists } from "../controllers/artistsController.js";
import validateArtistMiddleware from "../middlewares/validateArtistMiddleware.js";

const artistsRouter = Router();

artistsRouter.get("/artists", getArtists);
artistsRouter.get("/artist/:id", validateArtistMiddleware, getArtistProduct);

export default artistsRouter;

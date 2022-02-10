import { Router } from "express";
import { getArtists } from "../controllers/artistsController.js";

const artistsRouter = Router();

artistsRouter.get("/artists", getArtists);

export default artistsRouter;

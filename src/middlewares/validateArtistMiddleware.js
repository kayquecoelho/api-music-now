import { ObjectId } from "mongodb";
import db from "../db.js";
import idSchema from "../schemas/idSchema.js";

export default async function validateArtistMiddleware(req, res, next){
  const { id } = req.params;
  
  const validation = idSchema.validate(id);

  if (validation.error) {
    return res.sendStatus(404);
  }

  const artist = await db.collection("artists").findOne({ _id: new ObjectId(id) });
  
  if (!artist) {
    return res.sendStatus(404);
  }

  res.locals.artist = artist;

  next();
}
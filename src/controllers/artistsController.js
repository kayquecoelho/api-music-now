import db from "../db.js";

export async function getArtists(req, res) {
  try {
    const artists = await db.collection("artists").find().toArray();

    res.send(artists);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

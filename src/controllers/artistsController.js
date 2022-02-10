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

export async function getArtistProduct(req, res) {
  const { artist } = res.locals;

  const products = await db
    .collection("products")
    .find({ artist: artist.name })
    .toArray();

  const response = { name: artist.name, products };

  res.send(response);
}

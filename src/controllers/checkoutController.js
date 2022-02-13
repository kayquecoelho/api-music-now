import db from "../db.js";

export async function postCheckout(req, res) {
  const userCart = req.body;

  try {
    await db.collection("checkout").insertOne(userCart);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
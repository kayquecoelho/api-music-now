import db from "../db.js";

export async function postCheckout(req, res) {
  const user = res.locals.user;
  const userCart = req.body;

  try {
    await db.collection("checkout").insertOne({ cart: userCart, userId: user._id });

    await db.collection("cart").deleteOne({ userId: user._id });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
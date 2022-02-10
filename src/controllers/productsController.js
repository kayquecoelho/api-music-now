import db from "../db.js";

export async function products(req, res) {
  try {
    const products = await db.collection("products").find({}).toArray();
    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }  
}
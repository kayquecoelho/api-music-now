import { ObjectId } from "mongodb";
import db from "../db.js";
import idSchema from "../schemas/idSchema.js";

export async function getProduct(req, res) {
  const { id } = req.params;

  const validation = idSchema.validate(id);

  if (validation.error) {
    return res.sendStatus(404);
  }

  try {
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

    if (!product) {
      return res.sendStatus(404);
    }

    res.send(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function products(req, res) {
  const type = req.query.type;
  try {
    if (!type) {
      const products = await db.collection("products").find({}).toArray();
      return res.send(products);
    }
    const products = await db.collection("products").find({type}).toArray();
    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }  
}
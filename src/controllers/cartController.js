import db from "../db.js";

export async function postCart(req, res) {
  const user = res.locals.user;
  const product = req.body;

  try {
    const searchedUserCart = await db.collection("cart").findOne({ userId: user._id });
    if(!searchedUserCart){
      await db.collection("cart").insertOne({ 
        cart: [ { ...product } ], 
        userId: user._id,
        finshedPurchase: false
      });
      res.sendStatus(200);
    }else{
      const updatedUserCart = {
        ...searchedUserCart,
        cart: [ ...searchedUserCart.cart, { ...product } ]
      }
      await db.collection("cart").updateOne(
        { _id: searchedUserCart._id },
        { $set: updatedUserCart }
      );
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getCart(req, res) {
  const user = res.locals.user;
  
  try {
    const searchedUserCart = await db.collection("cart").findOne({ userId: user._id });
    if(!searchedUser){
      res.send([]);
    }

    res.send(searchedUserCart);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function deleteCart(req, res) {
  const user = res.locals.user;
  
  try {
    const searchedUserCart = await db.collection("cart").deleteOne({ userId: user._id });
    if(!searchedUserCart){
      res.send(404);
    }

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
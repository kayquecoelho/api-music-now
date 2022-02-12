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
    const searchedUser = await db.collection("cart").findOne({ userId: user._id });
    if(!searchedUser){
      return res.sendStatus(404);
    }

    res.send(searchedUser.cart);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function changeQuantity(req, res) {
  const { id } = req.params;
  const user = res.locals.user; 
  const { quantity } = req.body;

  try {
    const searchedUserCart = await db.collection("cart").findOne({ userId: user._id });

    const product = searchedUserCart.cart.find((p) => p._id === id);

    product.quantity = quantity;
  
    const updatedUserCart = {
      ...searchedUserCart,
      cart: [ ...searchedUserCart.cart ]
    }
    await db.collection("cart").updateOne(
      { _id: searchedUserCart._id },
      { $set: updatedUserCart }
    ); 
    res.send("OK!");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
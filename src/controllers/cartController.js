import db from "../db.js";

export async function postCart(req, res) {
  const { user } = res.locals;
  const product = req.body;

  try {
    const searchedUserCart = await db.collection("cart").findOne({ userId: user._id });

    if(!searchedUserCart) {
      await db.collection("cart").insertOne({ 
        cart: [ { ...product } ], 
        userId: user._id,
        finishedPurchase: false
      });

      res.sendStatus(200);
    } else {
      const productExist = searchedUserCart.cart.find((p) => p._id === product._id);
      
      if (productExist && product.quantity <= productExist.quantity) {
        return res.sendStatus(200);
      }

      if (productExist &&  product.quantity > productExist.quantity) {
        productExist.quantity = product.quantity;
        
        await db.collection("cart").updateOne(
          { _id: searchedUserCart._id },
          { $set: { cart: [ ...searchedUserCart.cart ] } }
        ); 
        return res.sendStatus(200);
      }

      await db.collection("cart").updateOne(
        { _id: searchedUserCart._id },
        { $set: { cart: [ ...searchedUserCart.cart, { ...product } ] } }
      );

      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getCart(req, res) {
  const { user } = res.locals;
  
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

export async function changeQuantity(req, res) {
  const { id } = req.params;
  const { user } = res.locals;
  const { quantity } = req.body;
  
  try {
    const searchedUserCart = await db.collection("cart").findOne({ userId: user._id });

    const product = searchedUserCart.cart.find((p) => p._id === id);

    if(!product) return res.sendStatus(404);

    product.quantity = quantity;
  
    await db.collection("cart").updateOne(
      { _id: searchedUserCart._id },
      { $set: { cart: [ ...searchedUserCart.cart ] } }
    );

    res.send("OK!");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function deleteProduct(req, res) {
  const { user } = res.locals;
  const { id } = req.params;

  try {
    const searchedUserCart = await db.collection("cart").findOne({ userId: user._id });

    if (!searchedUserCart) return res.sendStatus(404);
    
    const idExist = searchedUserCart.cart.find((p) => p._id === id)
    const productsFiltered = searchedUserCart.cart.filter((p) => p._id !== id);

    if (!idExist) {
      return res.sendStatus(404);
    }

    await db.collection("cart").updateOne(
      { _id: searchedUserCart._id },
      { $set: {
          cart: productsFiltered
        }
      }
    );

    res.send("OK!");
  } catch {
    res.sendStatus(500);
  }
}
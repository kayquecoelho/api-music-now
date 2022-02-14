import db from "../db.js";
import sgMail from "@sendgrid/mail";

export async function postCheckout(req, res) {
  const user = res.locals.user;
  const userCart = req.body;

  try {
    await db.collection("checkout").insertOne({ cart: userCart, userId: user._id });

    await db.collection("cart").deleteOne({ userId: user._id });

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: user.email,
      from: 'lkcoelho76@gmail.com',
      templateId: 'd-42b5c68fde5d4358a7aa3ee5c41026f8',
    };
    await sgMail.send(msg);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
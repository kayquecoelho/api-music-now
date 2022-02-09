import db from "../db.js";
import { stripHtml } from "string-strip-html";
import userSchema from "../schemas/userSchema.js";

export async function validateUserSchema(req, res, next) {
  const user = req.body;

  const validation = userSchema.validate(user, { abortEarly: false });

  if (validation.error){
    const arrErrors = validation.error.details.map((err) => err.message);
    const message = arrErrors.join(", ");
    return res.status(422).send(message);
  }

  const passwordStripped = stripHtml(user.password).result.trim();

  if (passwordStripped !== user.password) {
    const message = "HTML is not allowed, empty spaces are not allowed"
    return res.status(422).send(message);
  }

  const isRegistrated = await db.collection("users").findOne({ email: user.email });

  if (isRegistrated) {
    return res.status(409).send("User is registrated!");
  }

  next();
}
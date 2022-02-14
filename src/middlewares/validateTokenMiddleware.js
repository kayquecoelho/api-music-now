import db from "../db.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default async function validateTokenMiddleware(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace('Bearer ', '');
  const secretKey = process.env.JWT_SECRET;
  if(!token){
    res.sendStatus(401);
    return;
  }

  try {
    const session = await db.collection("sessions").findOne({ token });
    if(!session){
      res.sendStatus(401);
      return;
    }

    try {
      const user = jwt.verify(session.token, secretKey);

      res.locals.user = {...user, userId: session.userId};
      
      next();
    } catch (error) {
      console.log(error);
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
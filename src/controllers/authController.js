import db from "../db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export async function signIn(req, res) {
  const userData = req.body;
  const secretKey = process.env.JWT_SECRET;
  const configuration = { expiresIn: 60*60*24*30 };

  try {
    const user = await db.collection("users").findOne({ email: userData.email });
    if(!user){
      res.sendStatus(401);
      return;
    }

    const isAuthorized = bcrypt.compareSync(userData.password, user.password);
    if(isAuthorized){
      const token = jwt.sign(userData, secretKey, configuration);

      await db.collection("sessions").insertOne({ token, userId: user._id });

      res.send({ token, name: user.name });
      return;
    }

    res.sendStatus(401);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function register(req, res) {
  const user = req.body;

  try {
    const passwordHash = bcrypt.hashSync(user.password, 10);
    await db.collection("users").insertOne({ ...user, password: passwordHash });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

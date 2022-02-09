import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from "../db.js";

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await db.collection("users").findOne({ email });
    if(!user){
      res.sendStatus(401);
      return;
    }

    const isAuthorized = bcrypt.compareSync(password, user.password);
    if(isAuthorized){
      const token = uuid();

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

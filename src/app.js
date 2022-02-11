import express, { json } from 'express';
import cors from 'cors';
import router from "./routes/index.js";
import seed from './seed.js';

seed();
const app = express();

app.use(cors());
app.use(json());

app.use(router);

app.listen(5000, () => {
  console.log(`Listening on door ${process.env.PORT}`)
});

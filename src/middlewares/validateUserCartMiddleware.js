import userCartSchema from "../schemas/userCartSchema.js";

export default function validateProductSchemaMiddleware(req, res, next) {
  console.log("Entrei!");
  const validation = userCartSchema.validate(req.body, { abortEarly: true });
  if(validation.error){
    res.sendStatus(422);
    return;
  }

  next();
}
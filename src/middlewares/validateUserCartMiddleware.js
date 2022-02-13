import userCartSchema from "../schemas/userCartSchema.js";

export default function validateUserCartSchemaMiddleware(req, res, next) {
  const validation = userCartSchema.validate(req.body, { abortEarly: true });
  if(validation.error){
    res.sendStatus(422);
    return;
  }

  next();
}
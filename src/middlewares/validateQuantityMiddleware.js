import quantitySchema from "../schemas/quantitySchema.js";

export default function validateQuantityMiddleware(req, res, next) {
  const { quantity } = req.body;

  const quantityValidation = quantitySchema.validate(quantity);

  if (quantityValidation.error){
    return res.sendStatus(422);
  }

  if (quantity > 10 || quantity < 1) {
    return res.send("OK!");
  }

  next();
}
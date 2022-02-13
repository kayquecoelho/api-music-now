import joi from "joi";

const userCartSchema = joi.object({
  cart: joi.array().items(joi.object()).required(),
  userId: joi.string().length(24).required(),
  finshedPurchase: joi.boolean().required()
});

export default userCartSchema;
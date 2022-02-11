import joi from "joi";

const productSchema = joi.object({
  name: joi.string().required(), 
  artist: joi.string().required(), 
  type: joi.string().required(), 
  amount: joi.number().required(), 
  quantity: joi.number().integer().required(),
  image: joi.string().required(), 
  size: joi.string()
});

export default productSchema;
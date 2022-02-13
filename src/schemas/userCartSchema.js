import joi from "joi";

const userCartSchema = joi.array().items(joi.object()).required();

export default userCartSchema;
import joi from "joi";

const quantitySchema = joi.number().integer().required();

export default quantitySchema; 
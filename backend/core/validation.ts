import * as Joi from 'joi';

export const validationSchema: Joi.ObjectSchema<any> = Joi.object({
  BASE_URL: Joi.string().default('https://api.coingecko.com/api/v3').required(),
  PORT: Joi.number().default('8082'),
});

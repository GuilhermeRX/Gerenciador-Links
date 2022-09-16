import Joi from 'joi';
import ILink from '../interfaces/ILink';
import IUser from '../interfaces/IUser';

export const validationBodyLink = (obj: ILink) => {
  const schema = Joi.object({
    url: Joi.string().required(),
    label: Joi.string().required(),
    userId: Joi.number().required().integer().positive(),
  });

  const { error, value } = schema.validate(obj);
  if (error) throw error;
  return value;
};

export const validationBodyUser = (obj: IUser) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(obj);
  if (error) throw error;
  return value;
};
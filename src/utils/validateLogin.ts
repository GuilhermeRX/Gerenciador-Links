import Joi from 'joi';
import ILogin from '../interfaces/ILogin';

const validationLogin = (obj: ILogin) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(obj);
  if (error) throw error;
  return value;
};

export default validationLogin;
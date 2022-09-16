import Joi from 'joi';

const validationIdParams = (id: string) => {
  const schema = Joi.number().required().integer().positive();
  const { error, value } = schema.validate(id);
  if (error) throw error;
  return value;
};

export default validationIdParams;
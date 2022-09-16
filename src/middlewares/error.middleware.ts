import { ErrorRequestHandler } from 'express';
import { errorCatalog, ErrorTypes } from '../errors/catalog';

const errorMiddleware: ErrorRequestHandler = (err: Error, _req, res, _next) => {
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const mappedError = errorCatalog[messageAsErrorType];

  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ error: message });
  }

  return res.status(500).json({ message: 'Internal error' });
};

export default errorMiddleware;
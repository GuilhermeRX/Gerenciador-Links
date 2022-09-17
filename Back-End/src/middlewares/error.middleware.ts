import { ErrorRequestHandler } from 'express';
import { errorCatalog, ErrorTypes } from '../errors/catalog';

const errorMiddleware: ErrorRequestHandler = (err: Error, _req, res, _next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const mappedError = errorCatalog[messageAsErrorType];

  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ error: message });
  }

  return res.status(500).json({ error: err.message });
};

export default errorMiddleware;
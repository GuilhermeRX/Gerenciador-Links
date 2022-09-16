export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidId = 'InvalidId',
}

type ErrorResponseObject = {
  message: string;
  httpStatus: number;
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },
  InvalidId: {
    message: 'ID not found',
    httpStatus: 400,
  },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCatalog = exports.ErrorTypes = void 0;
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes["EntityNotFound"] = "EntityNotFound";
    ErrorTypes["InvalidId"] = "InvalidId";
    ErrorTypes["TokenNotFound"] = "TokenNotFound";
    ErrorTypes["EntityAlreadyExists"] = "EntityAlreadyExists";
})(ErrorTypes = exports.ErrorTypes || (exports.ErrorTypes = {}));
exports.errorCatalog = {
    EntityNotFound: {
        message: 'Object not found',
        httpStatus: 404,
    },
    InvalidId: {
        message: 'ID not found',
        httpStatus: 400,
    },
    TokenNotFound: {
        message: 'Token not found',
        httpStatus: 400,
    },
    EntityAlreadyExists: {
        message: 'Label already exists',
        httpStatus: 400,
    }
};

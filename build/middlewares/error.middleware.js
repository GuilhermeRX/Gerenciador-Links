"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_1 = require("../errors/catalog");
const errorMiddleware = (err, _req, res, _next) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }
    const messageAsErrorType = err.message;
    const mappedError = catalog_1.errorCatalog[messageAsErrorType];
    if (mappedError) {
        const { httpStatus, message } = mappedError;
        return res.status(httpStatus).json({ error: message });
    }
    return res.status(500).json({ error: err.message });
};
exports.default = errorMiddleware;

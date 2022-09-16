"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TokenNotFound extends Error {
    constructor(message) {
        super(message);
    }
}
exports.default = TokenNotFound;

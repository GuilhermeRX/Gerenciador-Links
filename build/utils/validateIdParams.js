"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validationIdParams = (id) => {
    const schema = joi_1.default.number().required().integer().positive();
    const { error, value } = schema.validate(id);
    if (error)
        throw error;
    return value;
};
exports.default = validationIdParams;

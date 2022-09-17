"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationBodyUser = exports.validationBodyLink = void 0;
const joi_1 = __importDefault(require("joi"));
const validationBodyLink = (obj) => {
    const schema = joi_1.default.object({
        url: joi_1.default.string().required(),
        label: joi_1.default.string().required(),
        userId: joi_1.default.number().integer().positive(),
    });
    const { error, value } = schema.validate(obj);
    if (error)
        throw error;
    return value;
};
exports.validationBodyLink = validationBodyLink;
const validationBodyUser = (obj) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().required(),
    });
    const { error, value } = schema.validate(obj);
    if (error)
        throw error;
    return value;
};
exports.validationBodyUser = validationBodyUser;

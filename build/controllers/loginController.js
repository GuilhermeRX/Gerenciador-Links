"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JwtService_1 = __importDefault(require("../services/JwtService"));
const validateLogin_1 = __importDefault(require("../utils/validateLogin"));
class LoginController {
    constructor(service) {
        this.service = service;
        this.jwtService = JwtService_1.default;
    }
    async authenticator(req, res) {
        (0, validateLogin_1.default)(req.body);
        const token = await this.service.authenticator(req.body);
        res.status(200).json({ token });
    }
    async validationAuthenticator(req, res, next) {
        const { authorization } = req.headers;
        if (!authorization)
            throw new Error('TokenNotFound');
        await this.jwtService.validateToken(authorization);
        next();
    }
}
exports.default = LoginController;

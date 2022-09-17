"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("../controllers/loginController"));
const LoginService_1 = __importDefault(require("../services/LoginService"));
const loginRoute = (0, express_1.Router)();
const loginService = new LoginService_1.default();
const loginController = new loginController_1.default(loginService);
loginRoute.post('/', (req, res) => loginController.authenticator(req, res));
exports.default = loginRoute;

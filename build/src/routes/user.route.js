"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const UserService_1 = __importDefault(require("../services/UserService"));
const userRoute = (0, express_1.Router)();
const userService = new UserService_1.default();
const userController = new userController_1.default(userService);
userRoute.post('/', (req, res) => userController.create(req, res));
userRoute.get('/', (req, res) => userController.read(req, res));
userRoute.get('/:id', (req, res) => userController.readOne(req, res));
userRoute.put('/:id', (req, res) => userController.update(req, res));
userRoute.delete('/:id', (req, res) => userController.delete(req, res));
exports.default = userRoute;

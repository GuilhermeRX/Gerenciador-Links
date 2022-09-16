"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const linkController_1 = __importDefault(require("../controllers/linkController"));
const LinkService_1 = __importDefault(require("../services/LinkService"));
const linkRoute = (0, express_1.Router)();
const linkService = new LinkService_1.default();
const linkController = new linkController_1.default(linkService);
linkRoute.post('/', (req, res) => linkController.create(req, res));
linkRoute.get('/', (req, res) => linkController.read(req, res));
linkRoute.get('/:id', (req, res) => linkController.readOne(req, res));
linkRoute.put('/:id', (req, res) => linkController.update(req, res));
linkRoute.delete('/:id', (req, res) => linkController.delete(req, res));
exports.default = linkRoute;

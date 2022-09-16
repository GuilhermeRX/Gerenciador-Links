"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractController_1 = __importDefault(require("./abstractController"));
class LinkController extends abstractController_1.default {
    constructor(service) {
        super(service);
    }
}
exports.default = LinkController;

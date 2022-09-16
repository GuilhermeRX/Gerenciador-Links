"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JwtService_1 = __importDefault(require("./JwtService"));
const UserService_1 = __importDefault(require("./UserService"));
class LoginService {
    constructor() {
        this.userService = new UserService_1.default();
    }
    async authenticator(obj) {
        const user = await this.userService.readOneEmail(obj);
        if (!user || user.password !== obj.password) {
            const error = new Error('Username or password invalid');
            error.name = 'ValidationError';
            throw error;
        }
        const token = JwtService_1.default.sign({ email: user.email, id: user.id });
        return token;
    }
}
exports.default = LoginService;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const loginController_1 = __importDefault(require("./controllers/loginController"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const link_route_1 = __importDefault(require("./routes/link.route"));
const login_route_1 = __importDefault(require("./routes/login.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const LoginService_1 = __importDefault(require("./services/LoginService"));
class App {
    constructor() {
        this.loginService = new LoginService_1.default();
        this.loginController = new loginController_1.default(this.loginService);
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use('/login', login_route_1.default);
        this.app.use((req, res, next) => this.loginController.validationAuthenticator(req, res, next));
        this.app.use('/user', user_route_1.default);
        this.app.use('/link', link_route_1.default);
        this.app.use(error_middleware_1.default);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.default = App;

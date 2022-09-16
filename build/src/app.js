"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const link_route_1 = __importDefault(require("./routes/link.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use('/user', user_route_1.default);
        this.app.use('/link', link_route_1.default);
        this.app.get('/', (req, res) => res.status(200).json('oi'));
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.default = App;

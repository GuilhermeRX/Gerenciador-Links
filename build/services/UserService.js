"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../database/models/User"));
const validateBody_1 = require("../utils/validateBody");
const validateIdParams_1 = __importDefault(require("../utils/validateIdParams"));
class UserService {
    constructor() {
        this.db = User_1.default;
    }
    async create(obj) {
        const [user] = await this.db
            .findOrCreate({ where: { email: obj.email }, defaults: { ...obj } });
        if (!user) {
            throw new Error('Usuario já existe');
        }
        return user;
    }
    async update(id, obj) {
        const numberId = (0, validateIdParams_1.default)(id);
        const objValid = (0, validateBody_1.validationBodyUser)(obj);
        const [rows] = await this.db.update({ ...objValid }, { where: { id: numberId } });
        if (rows === 0)
            throw new Error('Error inesperado');
        return { id: numberId, ...obj };
    }
    async read() {
        const users = await this.db.findAll();
        return users;
    }
    async readOne(id) {
        const numberId = (0, validateIdParams_1.default)(id);
        const user = await this.db.findByPk(numberId);
        if (!user)
            throw new Error('Usuario não existe');
        return user;
    }
    async readOneEmail(obj) {
        const user = await this.db.findOne({ where: { email: obj.email } });
        if (!user)
            throw new Error('Usuario não existe');
        return user;
    }
    async delete(id) {
        const numberId = (0, validateIdParams_1.default)(id);
        await this.db.destroy({ where: { id: numberId } });
    }
}
exports.default = UserService;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../database/models/User"));
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
        const [rows] = await this.db.update({ ...obj }, { where: { id } });
        if (rows === 0)
            throw new Error('Error inesperado');
        return { id, ...obj };
    }
    async read() {
        const users = await this.db.findAll();
        return users;
    }
    async readOne(id) {
        const user = await this.db.findByPk(id);
        if (!user)
            throw new Error('Usuario não existe');
        return user;
    }
    async delete(id) {
        await this.db.destroy({ where: { id } });
    }
}
exports.default = UserService;

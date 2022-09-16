"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const User_1 = __importDefault(require("../database/models/User"));
class UserService {
    constructor() {
        this.db = User_1.default;
    }
    validationBody(obj) {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            email: joi_1.default.string().required(),
            password: joi_1.default.string().required(),
        });
        const { error, value } = schema.validate(obj);
        if (error)
            throw error;
        return value;
    }
    validationIdParams(id) {
        const schema = joi_1.default.number().required().integer().positive();
        const { error, value } = schema.validate(id);
        if (error)
            throw error;
        return value;
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

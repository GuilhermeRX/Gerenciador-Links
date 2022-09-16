"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const Link_1 = __importDefault(require("../database/models/Link"));
class LinkService {
    constructor() {
        this.db = Link_1.default;
    }
    validationBody(obj) {
        const schema = joi_1.default.object({
            url: joi_1.default.string().required(),
            label: joi_1.default.string().required(),
            userId: joi_1.default.number().required().integer().positive(),
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
        const [link] = await this.db
            .findOrCreate({ where: { label: obj.label }, defaults: { ...obj } });
        if (!link) {
            throw new Error('Label já existe');
        }
        return link;
    }
    async update(id, obj) {
        const [rows] = await this.db.update({ ...obj }, { where: { id } });
        if (rows === 0)
            throw new Error('Error inesperado');
        return { id, ...obj };
    }
    async read() {
        const links = await this.db.findAll();
        return links;
    }
    async readOne(id) {
        const link = await this.db.findByPk(id);
        if (!link)
            throw new Error('Usuario não existe');
        return link;
    }
    async delete(id) {
        await this.db.destroy({ where: { id } });
    }
}
exports.default = LinkService;

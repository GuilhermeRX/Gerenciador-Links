"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Link_1 = __importDefault(require("../database/models/Link"));
const validateBody_1 = require("../utils/validateBody");
const validateIdParams_1 = __importDefault(require("../utils/validateIdParams"));
const UserService_1 = __importDefault(require("./UserService"));
class LinkService {
    constructor() {
        this.db = Link_1.default;
        this.userService = new UserService_1.default();
    }
    async create(obj) {
        const objValid = (0, validateBody_1.validationBodyLink)(obj);
        await this.userService.readOne(objValid.userId);
        const [link, boolean] = await this.db
            .findOrCreate({ where: { label: obj.label }, defaults: { ...objValid } });
        if (!boolean) {
            throw new Error('EntityAlreadyExists');
        }
        return link;
    }
    async update(id, obj) {
        const numberId = (0, validateIdParams_1.default)(id);
        const objValid = (0, validateBody_1.validationBodyLink)(obj);
        await this.db.update({ ...objValid }, { where: { id: numberId } });
        return { id: numberId, ...obj };
    }
    async read() {
        const links = await this.db.findAll();
        return links;
    }
    async readOne(id) {
        const numberId = (0, validateIdParams_1.default)(id);
        const link = await this.db.findByPk(numberId);
        if (!link)
            throw new Error('EntityNotFound');
        return link;
    }
    async delete(id) {
        const numberId = (0, validateIdParams_1.default)(id);
        await this.db.destroy({ where: { id: numberId } });
    }
}
exports.default = LinkService;

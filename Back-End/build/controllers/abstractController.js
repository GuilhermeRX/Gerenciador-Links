"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractController {
    constructor(service) {
        this._service = service;
    }
    async create(req, res) {
        const obj = await this._service.create(req.body);
        return res.status(201).json(obj);
    }
    async read(req, res) {
        const objs = await this._service.read();
        return res.status(200).json(objs);
    }
    async readOne(req, res) {
        const obj = await this._service.readOne(req.params.id);
        return res.status(200).json(obj);
    }
    async update(req, res) {
        const objUpdated = await this._service.update(req.params.id, req.body);
        return res.status(200).json(objUpdated);
    }
    async delete(req, res) {
        await this._service.delete(req.params.id);
        return res.status(204).end();
    }
}
exports.default = AbstractController;

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
        const id = Number(req.params.id);
        const obj = await this._service.readOne(id);
        return res.status(200).json(obj);
    }
    async update(req, res) {
        const id = Number(req.params.id);
        const obj = await this._service.update(id, req.body);
        return res.status(200).json(obj);
    }
    async delete(req, res) {
        const id = Number(req.params.id);
        await this._service.delete(id);
        return res.status(204).end();
    }
}
exports.default = AbstractController;

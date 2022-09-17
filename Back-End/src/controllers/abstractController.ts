import { Request, Response } from 'express';
import IController from '../interfaces/IController';
import IService from '../interfaces/IService';

export default abstract class AbstractController<T> implements IController {
  protected _service: IService<T>;

  constructor(service: IService<T>) {
    this._service = service;
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const obj = await this._service.create(req.body);
    return res.status(201).json(obj);
  }

  public async read(req: Request, res: Response): Promise<Response> {
    const objs = await this._service.read();
    return res.status(200).json(objs);
  }

  public async readOne(req: Request, res: Response): Promise<Response> {
    const obj = await this._service.readOne(req.params.id);
    return res.status(200).json(obj);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const objUpdated = await this._service.update(req.params.id, req.body);
    return res.status(200).json(objUpdated);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    await this._service.delete(req.params.id);
    return res.status(204).end();
  }
}
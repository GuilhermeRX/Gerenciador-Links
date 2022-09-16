import { Request, Response } from 'express';
import IController from '../interfaces/IController';
import IService from '../interfaces/IService';

export default class AbstractController<T> implements IController {
  constructor(private _service: IService<T>) { }

  public async create(req: Request, res: Response): Promise<Response> {
    const obj = await this._service.create(req.body);
    return res.status(201).json(obj);
  }

  public async read(req: Request, res: Response): Promise<Response> {
    const objs = await this._service.read();
    return res.status(200).json(objs);
  }

  public async readOne(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const obj = await this._service.readOne(id);
    return res.status(200).json(obj);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const obj = await this._service.update(id, req.body);
    return res.status(200).json(obj);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    await this._service.delete(id);
    return res.status(204).end();
  }
}
import { Request, Response } from 'express';
import JwtService from 'src/services/JwtService';
import ILink from '../interfaces/ILink';
import IService from '../interfaces/IService';
import AbstractController from './abstractController';

export default class LinkController extends AbstractController<ILink> {
  public constructor(service: IService<ILink>) {
    super(service);
  }

  public async read(req: Request, res: Response) {
    const { authorization } = req.headers;

    const data = JwtService.validateToken(authorization as string);
    const obj = await this._service.read(data.id);

    return res.status(200).json(obj);
  }
}
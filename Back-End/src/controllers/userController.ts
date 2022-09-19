import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import IUser from '../interfaces/IUser';
import JwtService from '../services/JwtService';
import AbstractController from './abstractController';

export default class UserController extends AbstractController<IUser> {
  public constructor(service: IService<IUser>) {
    super(service);
  }
  public async readOne(req: Request, res: Response) {
    const { authorization } = req.headers;

    const data = JwtService.validateToken(authorization as string);
    const obj = await this._service.readOne(data.id);

    return res.status(200).json(obj);
  }
}
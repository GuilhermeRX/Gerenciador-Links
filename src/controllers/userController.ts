import IService from '../interfaces/IService';
import IUser from '../interfaces/IUser';
import AbstractController from './abstractController';

export default class UserController extends AbstractController<IUser> {
  private constructor(service: IService<IUser>) {
    super(service);
  }
}
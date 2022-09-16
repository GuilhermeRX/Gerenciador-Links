import ILink from '../interfaces/ILink';
import IService from '../interfaces/IService';
import AbstractController from './abstractController';

export default class LinkController extends AbstractController<ILink> {
  public constructor(service: IService<ILink>) {
    super(service);
  }
}
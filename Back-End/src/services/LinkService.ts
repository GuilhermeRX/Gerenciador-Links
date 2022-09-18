import Link from '../database/models/Link';
import ILink from '../interfaces/ILink';
import IService from '../interfaces/IService';
import { validationBodyLink } from '../utils/validateBody';
import validationIdParams from '../utils/validateIdParams';
import UserService from './UserService';

export default class LinkService implements IService<ILink> {
  private db = Link;
  private userService = new UserService();

  public async create(obj: ILink): Promise<ILink> {
    const objValid = validationBodyLink(obj);
    await this.userService.readOne(objValid.userId);
    const [link, boolean] = await this.db
      .findOrCreate({ where: { label: obj.label }, defaults: { ...objValid } });
    if (!boolean) {
      throw new Error('EntityAlreadyExists');
    }
    return link;
  }

  public async update(id: string, obj: ILink): Promise<ILink> {
    const numberId = validationIdParams(id);
    const objValid = validationBodyLink(obj);
    await this.db.update({ ...objValid }, { where: { id: numberId } });
    return { id: numberId, ...obj };
  }

  public async read(id: number): Promise<ILink[]> {
    const links = await this.db.findAll({ where: { id } });
    return links;
  }

  public async readOne(id: string): Promise<ILink> {
    const numberId = validationIdParams(id);
    const link = await this.db.findByPk(numberId);

    if (!link) throw new Error('EntityNotFound');
    return link;
  }

  public async delete(id: string): Promise<void> {
    const numberId = validationIdParams(id);
    await this.db.destroy({ where: { id: numberId } });
  }
}
import User from '../database/models/User';
import IService from '../interfaces/IService';
import IUser from '../interfaces/IUser';
import { validationBodyUser } from '../utils/validateBody';
import { validationIdParams } from '../utils/validateIdParams';

export default class UserService implements IService<IUser> {
  private db = User;

  public async create(obj: IUser): Promise<IUser> {
    const [user] = await this.db
      .findOrCreate({ where: { email: obj.email }, defaults: { ...obj } });
    if (!user) {
      throw new Error('Usuario já existe');
    }
    return user;
  }

  public async update(id: string, obj: IUser): Promise<IUser> {
    const numberId = validationIdParams(id);
    const objValid = validationBodyUser(obj);

    const [rows] = await this.db.update({ ...objValid }, { where: { id: numberId } });
    if (rows === 0) throw new Error('Error inesperado');
    return { id: numberId, ...obj };
  }

  public async read(): Promise<IUser[]> {
    const users = await this.db.findAll();
    return users;
  }

  public async readOne(id: string): Promise<IUser> {
    const numberId = validationIdParams(id);
    const user = await this.db.findByPk(numberId);
    if (!user) throw new Error('Usuario não existe');
    return user;
  }

  public async delete(id: string): Promise<void> {
    const numberId = validationIdParams(id);
    await this.db.destroy({ where: { id: numberId } });
  }
}
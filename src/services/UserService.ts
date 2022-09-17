import User from '../database/models/User';
import ILogin from '../interfaces/ILogin';
import IService from '../interfaces/IService';
import IUser from '../interfaces/IUser';
import { validationBodyUser } from '../utils/validateBody';
import validationIdParams from '../utils/validateIdParams';
import JwtService from './JwtService';

export default class UserService implements IService<IUser> {
  private db = User;

  public async create(obj: IUser): Promise<string> {
    const [user, boolean] = await this.db
      .findOrCreate({ where: { email: obj.email }, defaults: { ...obj } });
    if (!boolean) {
      throw new Error('EntityAlreadyExists');
    }
    const token = JwtService.sign({ email: user.email, id: user.id });
    return token;
  }

  public async update(id: string, obj: IUser): Promise<IUser> {
    const numberId = validationIdParams(id);
    const objValid = validationBodyUser(obj);

    await this.db.update({ ...objValid }, { where: { id: numberId } });
    return { id: numberId, ...obj };
  }

  public async read(): Promise<IUser[]> {
    const users = await this.db.findAll();
    return users;
  }

  public async readOne(id: string): Promise<IUser> {
    const numberId = validationIdParams(id);
    const user = await this.db.findByPk(numberId);
    if (!user) throw new Error('EntityNotFound');
    return user;
  }

  public async readOneEmail(obj: ILogin): Promise<User | null> {
    const user = await this.db.findOne({ where: { email: obj.email } });
    if (!user) throw new Error('EntityNotFound');
    return user;
  }

  public async delete(id: string): Promise<void> {
    const numberId = validationIdParams(id);
    await this.db.destroy({ where: { id: numberId } });
  }
}
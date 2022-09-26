import User from '../database/models/User';
import ILogin from '../interfaces/ILogin';
import IService from '../interfaces/IService';
import IToken from '../interfaces/IToken';
import IUser from '../interfaces/IUser';
import { validationBodyUser } from '../utils/validateBody';
import validationIdParams from '../utils/validateIdParams';
import JwtService from './JwtService';

export default class UserService implements IService<IUser> {
  private db = User;

  public async create(obj: IUser): Promise<IToken> {
    const objValid = validationBodyUser(obj);
    const [user, boolean] = await this.db
      .findOrCreate({ where: { email: objValid.email }, defaults: { ...objValid } });
    if (!boolean) {
      throw new Error('UserAlreadyExists');
    }
    const token = JwtService.sign({ email: user.email, id: user.id });
    return { token };
  }

  public async update(id: string, obj: IUser): Promise<IUser> {
    const numberId = validationIdParams(id);
    const objValid = validationBodyUser(obj);

    await this.db.update({ ...objValid }, { where: { id: numberId } });
    return { id: numberId, ...obj };
  }

  public async read(): Promise<IUser[]> {
    const users = await this.db.findAll({ attributes: { exclude: ['password'] } });
    return users;
  }

  public async readOne(id: string): Promise<IUser> {
    const numberId = validationIdParams(id);
    const user = await this.db.findByPk(numberId, { attributes: { exclude: ['password'] } });
    if (!user) throw new Error('EntityNotFound');
    return user;
  }

  public async readOneEmail(obj: ILogin): Promise<User> {
    const user = await this.db.findOne({ where: { email: obj.email } });
    if (!user) throw new Error('UserNotExists');
    return user;
  }

  public async delete(id: string): Promise<void> {
    const numberId = validationIdParams(id);
    await this.db.destroy({ where: { id: numberId } });
  }
}
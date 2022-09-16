import User from '../database/models/User';
import IService from '../interfaces/IService';
import IUser from '../interfaces/IUser';

export default class UserService implements IService<IUser> {
  private db = User;

  public async create(obj: User): Promise<User> {
    const [user] = await this.db
      .findOrCreate({ where: { email: obj.email }, defaults: { ...obj } });
    if (!user) {
      throw new Error('Usuario já existe');
    }
    return user;
  }

  public async update(id: number, obj: IUser): Promise<IUser> {
    const [rows] = await this.db.update({ ...obj }, { where: { id } });
    if (rows === 0) throw new Error('Error inesperado');
    return { id, ...obj };
  }

  public async read(): Promise<IUser[]> {
    const users = await this.db.findAll();
    return users;
  }

  public async readOne(id: number): Promise<IUser> {
    const user = await this.db.findByPk(id);

    if (!user) throw new Error('Usuario não existe');
    return user;
  }

  public async delete(id: number): Promise<void> {
    await this.db.destroy({ where: { id } });
  }
}
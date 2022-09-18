import ILogin from './ILogin';
import IToken from './IToken';

interface IService<T> {
  create(obj: T): Promise<T | IToken>
  read(id?: number): Promise<T[]>
  readOne(id: string): Promise<T>
  update(id: string, obj: T): Promise<T>
  delete(id: string): Promise<void>
  readOneEmail?(obj: ILogin): Promise<T>
}

export default IService;
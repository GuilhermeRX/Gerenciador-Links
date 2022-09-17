import IToken from './IToken';

interface IService<T> {
  create(obj: T): Promise<T | IToken>
  read(): Promise<T[]>
  readOne(id: string): Promise<T>
  update(id: string, obj: T): Promise<T>
  delete(id: string): Promise<void>
}

export default IService;
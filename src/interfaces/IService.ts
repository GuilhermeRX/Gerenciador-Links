interface IService<T> {
  create(obj: T): Promise<T | string>
  read(): Promise<T[]>
  readOne(id: string): Promise<T>
  update(id: string, obj: T): Promise<T>
  delete(id: string): Promise<void>
}

export default IService;
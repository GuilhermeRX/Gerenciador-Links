interface IService<T> {
  create(obj: T): Promise<T>
  read(): Promise<T[]>
  readOne(id: number): Promise<T>
  update(id: number, obj: T): Promise<T>
  delete(id: number): Promise<void>
}

export default IService;
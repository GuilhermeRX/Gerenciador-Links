import Link from "../database/models/Link";
import ILink from "../interfaces/ILink";
import IService from "../interfaces/IService";

export default class LinkService implements IService<ILink> {
  private db = Link;

  public async create(obj: ILink): Promise<ILink> {
    const [link] = await this.db
      .findOrCreate({ where: { email: obj.label }, defaults: { ...obj } });
    if (!link) {
      throw new Error('Label já existe');
    }
    return link;
  }

  public async update(id: number, obj: ILink): Promise<ILink> {
    const [rows] = await this.db.update({ ...obj }, { where: { id } });
    if (rows === 0) throw new Error('Error inesperado');
    return { id, ...obj };
  }

  public async read(): Promise<ILink[]> {
    const links = await this.db.findAll();
    return links;
  }

  public async readOne(id: number): Promise<ILink> {
    const link = await this.db.findByPk(id);

    if (!link) throw new Error('Usuario não existe');
    return link;
  }

  public async delete(id: number): Promise<void> {
    await this.db.destroy({ where: { id } });
  }
}
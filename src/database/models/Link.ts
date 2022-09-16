import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Link extends Model {
  id!: number;
  url!: string;
  label!: string;
}

Link.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  url: {
    type: STRING,
    allowNull: false,
  },
  label: {
    type: STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'links',
  underscored: true,
  timestamps: true,
})

export default Link;
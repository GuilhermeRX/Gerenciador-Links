import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import User from './User';

class Link extends Model {
  id!: number;
  url!: string;
  label!: string;
  userId!: number;
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
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'links',
  underscored: true,
  timestamps: false,
});

Link.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

User.hasMany(Link, {
  foreignKey: 'userId',
  as: 'links',
});

export default Link;
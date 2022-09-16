"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const User_1 = __importDefault(require("./User"));
class Link extends sequelize_1.Model {
}
Link.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    url: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    label: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'links',
    underscored: true,
    timestamps: false,
});
Link.belongsTo(User_1.default, {
    foreignKey: 'userId',
    as: 'user',
});
User_1.default.hasMany(Link, {
    foreignKey: 'userId',
    as: 'links',
});
exports.default = Link;

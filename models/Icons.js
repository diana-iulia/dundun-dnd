const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Icons extends Model {}

Icons.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    icon_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    npc_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'npc',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'icons',
  }
);

module.exports = Icons;

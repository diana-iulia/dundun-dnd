const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Alignment extends Model {}

Alignment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alignment_path: {
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
    modelName: 'alignment',
  }
);



module.exports = Alignment;

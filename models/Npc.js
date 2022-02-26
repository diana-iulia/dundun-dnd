const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Npc extends Model {}

Npc.init(
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
    alignment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'campaign',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'npc',
  }
);

module.exports = Npc;

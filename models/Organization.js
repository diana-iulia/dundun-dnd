const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Organization extends Model {}

Organization.init(
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
    modelName: 'organization',
  }
);

module.exports = Organization;

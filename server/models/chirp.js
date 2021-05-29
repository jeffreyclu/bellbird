const { Model, DataTypes } = require('sequelize');
const db = require('./db');

class Chirp extends Model {}

Chirp.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    upvotes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    sequelize: db,
    modelName: 'chirp',
    timestamps: false,
  }
);

module.exports = Chirp;

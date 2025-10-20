const { DataTypes } = require('sequelize');
const db = require('../db/conn')

const Bloco = db.define('Bloco', {
  IdBloco: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  NomeBloco: { type: DataTypes.STRING, allowNull: false, unique: true }
}, {
  tableName: 'Bloco',
  timestamps: false
});

module.exports = Bloco;

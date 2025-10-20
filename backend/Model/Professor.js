const { DataTypes } = require('sequelize');
const db = require('../db/conn')

const Professor = db.define('Professor', {
  CadastroProfessor: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  NomeProfessor: { type: DataTypes.STRING, allowNull: false },
  EmailProfessor: { type: DataTypes.STRING, allowNull: false, unique: true },
  SenhaProfessor: { type: DataTypes.STRING, allowNull: false },
  Coordenador: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'Professor',
  timestamps: false
});

module.exports = Professor;

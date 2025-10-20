const { DataTypes } = require('sequelize');
const db = require('../db/conn')

const Coordenador = db.define('Coordenador', {
  CadastroCoordenador: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  NomeCoordenador: { type: DataTypes.STRING, allowNull: false },
  EmailCoordenador: { type: DataTypes.STRING, allowNull: true, unique: true },
  SenhaCoordenador: { type: DataTypes.STRING, allowNull: false },
  TipoCursosCoordenados: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'Coordenador',
  timestamps: false
});

module.exports = Coordenador;

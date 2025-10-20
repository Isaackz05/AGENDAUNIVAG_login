const { DataTypes } = require('sequelize');
const db = require('../db/conn')

const Turmas = db.define('Turmas', {
  IdTurma: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  NomeTurma: { type: DataTypes.STRING, allowNull: false },
  Cursos: { type: DataTypes.STRING, allowNull: false },
  QuantidadeAlunos: { type: DataTypes.INTEGER, allowNull: false },
  Semestre: { type: DataTypes.INTEGER, allowNull: false },
  Descricao: { type: DataTypes.STRING },
  Coordenador: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'Turmas',
  timestamps: false
});

module.exports = Turmas;

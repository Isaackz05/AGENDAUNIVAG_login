const { DataTypes } = require('sequelize');
const db = require('../db/conn')

const ProfessorTurma = db.define('ProfessorTurma', {
  IdProfessor: { type: DataTypes.INTEGER },
  IdTurma: { type: DataTypes.INTEGER }
}, {
  tableName: 'ProfessorTurma',
  timestamps: false
});

module.exports = ProfessorTurma;

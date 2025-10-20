const { DataTypes } = require('sequelize');
const db = require('../db/conn')

const Agendamento = db.define('Agendamento', {
  IdAgendamento: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  HorarioAgendadoInicial: { type: DataTypes.STRING },
  HorarioAgendadoFinal: { type: DataTypes.STRING, allowNull: false },
  ProfessorSolicitante: { type: DataTypes.INTEGER },
  StatusAgendamento: { type: DataTypes.STRING, allowNull: false },
  LaboratorioSolicitado: { type: DataTypes.INTEGER },
  turmaAgendamento: { type: DataTypes.STRING }
}, {
  tableName: 'Agendamento',
  timestamps: false
});

module.exports = Agendamento;

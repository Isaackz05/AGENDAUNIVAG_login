const { DataTypes } = require('sequelize');
const db = require('../db/conn')

const Laboratorio = db.define('Laboratorio', {
  IdLaboratorio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  NomeLaboratorio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  HorarioFuncional: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Softwares: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Recursos: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Prioridade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  StatusDisponibilidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  BlocoPertencente: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'Laboratorio',
  timestamps: false
});

module.exports = Laboratorio;

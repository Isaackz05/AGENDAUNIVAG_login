const express = require('express');
const router = express.Router();

const ProfessorTurmaController = require('../controllers/ProfessorTurmaController');

// Rotas de ProfessorTurma
router.get('/professor-turma', ProfessorTurmaController.listar);
router.post('/professor-turma', ProfessorTurmaController.criar);
router.delete('/professor-turma', ProfessorTurmaController.deletar);

module.exports = router;

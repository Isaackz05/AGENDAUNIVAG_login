const express = require('express');
const router = express.Router();

const ProfessorController = require('../controllers/ProfessorController');

// Rotas de Professor
router.get('/professores', ProfessorController.listar);
router.post('/professores', ProfessorController.criar);
router.put('/professores/:id', ProfessorController.atualizar);
router.delete('/professores/:id', ProfessorController.deletar);

module.exports = router;

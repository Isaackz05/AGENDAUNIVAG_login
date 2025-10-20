const express = require('express');
const router = express.Router();

const TurmasController = require('../controllers/TurmasController');

// Rotas de Turmas
router.get('/turmas', TurmasController.listar);
router.post('/turmas', TurmasController.criar);
router.put('/turmas/:id', TurmasController.atualizar);
router.delete('/turmas/:id', TurmasController.deletar);

module.exports = router;

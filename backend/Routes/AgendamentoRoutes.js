const express = require('express');
const router = express.Router();

const AgendamentoController = require('../controllers/AgendamentoController');

// Rotas de Agendamento
router.get('/agendamentos', AgendamentoController.listar);
router.post('/agendamentos', AgendamentoController.criar);
router.put('/agendamentos/:id', AgendamentoController.atualizar);
router.delete('/agendamentos/:id', AgendamentoController.deletar);

module.exports = router;
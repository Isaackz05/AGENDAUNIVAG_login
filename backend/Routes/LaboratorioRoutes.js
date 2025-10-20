const express = require('express');
const router = express.Router();

const LaboratorioController = require('../Controllers/LaboratorioController')

// Rotas de Laboratório
router.get('/laboratorios', LaboratorioController.listar);
router.post('/laboratorios', LaboratorioController.criar);
router.put('/laboratorios/:id', LaboratorioController.atualizar);
router.delete('/laboratorios/:id', LaboratorioController.deletar);

// (Os demais controllers seguem o mesmo padrão CRUD)
module.exports = router;

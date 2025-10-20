const express = require('express');
const router = express.Router();

const CoordenadorController = require('../controllers/CoordenadorController');

// Rotas de Coordenador
router.get('/coordenadores', CoordenadorController.listar);
router.post('/coordenadores', CoordenadorController.criar);
router.put('/coordenadores/:id', CoordenadorController.atualizar);
router.delete('/coordenadores/:id', CoordenadorController.deletar);

module.exports = router;

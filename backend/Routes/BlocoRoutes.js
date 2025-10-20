const express = require('express');
const router = express.Router();

const BlocoController = require('../controllers/BlocoController');

// Rotas de Bloco
router.get('/blocos', BlocoController.listar);
router.post('/blocos', BlocoController.criar);
router.put('/blocos/:id', BlocoController.atualizar);
router.delete('/blocos/:id', BlocoController.deletar);

module.exports = router;

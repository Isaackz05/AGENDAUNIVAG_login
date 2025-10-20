const Turmas = require('../Model/Turmas');

module.exports = {
  async listar(req, res) {
    try {
      const dados = await Turmas.findAll();
      res.json(dados);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async criar(req, res) {
    try {
      const novo = await Turmas.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      await Turmas.update(req.body, { where: { IdTurma: id } });
      res.json({ message: 'Atualizado com sucesso!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await Turmas.destroy({ where: { IdTurma: id } });
      res.json({ message: 'Deletado com sucesso!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

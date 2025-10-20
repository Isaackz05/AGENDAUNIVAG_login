const Professor = require('../Model/Professor');

module.exports = {
  async listar(req, res) {
    try {
      const dados = await Professor.findAll();
      res.json(dados);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async criar(req, res) {
    try {
      const novo = await Professor.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      await Professor.update(req.body, { where: { CadastroProfessor: id } });
      res.json({ message: 'Atualizado com sucesso!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await Professor.destroy({ where: { CadastroProfessor: id } });
      res.json({ message: 'Deletado com sucesso!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

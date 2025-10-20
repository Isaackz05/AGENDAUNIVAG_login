const Coordenador = require('../Model/Coordenador');

module.exports = {
  async listar(req, res) {
    try {
      const dados = await Coordenador.findAll();
      res.json(dados);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async criar(req, res) {
    try {
      const novo = await Coordenador.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      await Coordenador.update(req.body, { where: { CadastroCoordenador: id } });
      res.json({ message: 'Atualizado com sucesso!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await Coordenador.destroy({ where: { CadastroCoordenador: id } });
      res.json({ message: 'Deletado com sucesso!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

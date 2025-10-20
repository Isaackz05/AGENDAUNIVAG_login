const ProfessorTurma = require('../Model/ProfessorTurma');

module.exports = {
  async listar(req, res) {
    try {
      const dados = await ProfessorTurma.findAll();
      res.json(dados);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async criar(req, res) {
    try {
      const novo = await ProfessorTurma.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deletar(req, res) {
    try {
      const { IdProfessor, IdTurma } = req.body;
      await ProfessorTurma.destroy({ where: { IdProfessor, IdTurma } });
      res.json({ message: 'Relacionamento deletado com sucesso!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

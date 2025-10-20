const Laboratorio = require('../Model/Laboratorio');

module.exports = {
  async listar(req, res) {
    try {
      const labs = await Laboratorio.findAll();
      return res.json(labs);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao listar laboratórios', details: err.message });
    }
  },

  async criar(req, res) {
    try {
      const novoLab = await Laboratorio.create(req.body);
      return res.status(201).json(novoLab);
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao criar laboratório', details: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      await Laboratorio.update(req.body, { where: { IdLaboratorio: id } });
      return res.json({ message: 'Laboratório atualizado com sucesso!' });
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao atualizar laboratório', details: err.message });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await Laboratorio.destroy({ where: { IdLaboratorio: id } });
      return res.json({ message: 'Laboratório deletado com sucesso!' });
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao deletar laboratório', details: err.message });
    }
  }
};

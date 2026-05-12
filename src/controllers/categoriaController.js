const categoriaService = require("../services/categoriaService");

exports.listar = async (req, res) => {
  try {
    const categorias = await categoriaService.listarCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(error.status || 500).json({ erro: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const categoria = await categoriaService.buscarCategoriaPorId(req.id);
    res.status(200).json(categoria);
  } catch (error) {
    res.status(error.status || 500).json({ erro: error.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const novaCategoria = await categoriaService.criarCategoria(req.body);
    res.status(201).json(novaCategoria);
  } catch (error) {
    res.status(error.status || 500).json({ erro: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const categoriaAtualizada = await categoriaService.atualizarCategoria(
      req.id, req.body
    );
    res.status(200).json(categoriaAtualizada);
  } catch (error) {
    res.status(error.status || 500).json({ erro: error.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    const resultado = await categoriaService.deletarCategoria(req.id);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(error.status || 500).json({ erro: error.message });
  }
};
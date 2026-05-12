const produtoService = require("../services/produtoService");

exports.listar = async (req, res) => {
  try {
    const produtos = await produtoService.listarProdutos();
    res.status(200).json(produtos);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      erro: error.message || "Erro ao buscar produtos"
    });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const produto = await produtoService.buscarProdutoPorId(req.id);
    res.status(200).json(produto);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      erro: error.message || "Erro ao buscar produto"
    });
  }
};

exports.criar = async (req, res) => {
  try {
    const novoProduto = await produtoService.criarProduto(req.body);
    res.status(201).json(novoProduto);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      erro: error.message || "Erro ao criar produto"
    });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const produtoAtualizado = await produtoService.atualizarProduto(
      req.id,
      req.body
    );
    res.status(200).json(produtoAtualizado);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      erro: error.message || "Erro ao atualizar produto"
    });
  }
};

exports.deletar = async (req, res) => {
  try {
    const resultado = await produtoService.deletarProduto(req.id);
    res.status(200).json(resultado);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      erro: error.message || "Erro ao deletar produto"
    });
  }
  
};
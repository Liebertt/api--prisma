const prisma = require("../config/prisma");

function criarErro(mensagem, status) {
  const erro = new Error(mensagem);
  erro.status = status;
  return erro;
}

function validarDadosProduto(dados) {
  const { nome, preco, quantidade } = dados;

  if (!nome || nome.trim() === "") {
    throw criarErro("Nome é obrigatório", 400);
  }
  if (preco === undefined || Number(preco) <= 0) {
    throw criarErro("Preço deve ser maior que zero", 400);
  }
  if (quantidade === undefined || Number(quantidade) < 0) {
    throw criarErro("Quantidade não pode ser negativa", 400);
  }
}

exports.listarProdutos = async () => {
  const produtos = await prisma.produto.findMany({
    orderBy: { id: "asc" }
  });
  return produtos;
};

exports.buscarProdutoPorId = async (id) => {
  const produto = await prisma.produto.findUnique({
    where: { id }
  });
  if (!produto) {
    throw criarErro("Produto não encontrado", 404);
  }
  return produto;
};

exports.criarProduto = async (dados) => {
  validarDadosProduto(dados);
  const novoProduto = await prisma.produto.create({
    data: {
      nome: dados.nome.trim(),
      descricao: dados.descricao ? dados.descricao.trim() : null,
      preco: Number(dados.preco),
      quantidade: Number(dados.quantidade)
    }
  });
  return novoProduto;
};

exports.atualizarProduto = async (id, dados) => {
  await exports.buscarProdutoPorId(id);
  validarDadosProduto(dados);
  const produtoAtualizado = await prisma.produto.update({
    where: { id },
    data: {
      nome: dados.nome.trim(),
      descricao: dados.descricao ? dados.descricao.trim() : null,
      preco: Number(dados.preco),
      quantidade: Number(dados.quantidade)
    }
  });
  return produtoAtualizado;
};

exports.deletarProduto = async (id) => {
  await exports.buscarProdutoPorId(id);
  await prisma.produto.delete({
    where: { id }
  });
  return { mensagem: "Produto deletado com sucesso" };
};
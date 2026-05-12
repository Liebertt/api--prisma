const prisma = require("../config/prisma");

function criarErro(mensagem, status) {
  const erro = new Error(mensagem);
  erro.status = status;
  return erro;
}

exports.listarCategorias = async () => {
  return await prisma.categoria.findMany({
    orderBy: { id: "asc" },
    include: { produtos: true }
  });
};

exports.buscarCategoriaPorId = async (id) => {
  const categoria = await prisma.categoria.findUnique({
    where: { id },
    include: { produtos: true }
  });
  if (!categoria) throw criarErro("Categoria não encontrada", 404);
  return categoria;
};

exports.criarCategoria = async (dados) => {
  const { nome } = dados;
  if (!nome || nome.trim() === "") {
    throw criarErro("Nome é obrigatório", 400);
  }
  return await prisma.categoria.create({
    data: { nome: nome.trim() }
  });
};

exports.atualizarCategoria = async (id, dados) => {
  await exports.buscarCategoriaPorId(id);
  const { nome } = dados;
  if (!nome || nome.trim() === "") {
    throw criarErro("Nome é obrigatório", 400);
  }
  return await prisma.categoria.update({
    where: { id },
    data: { nome: nome.trim() }
  });
};

exports.deletarCategoria = async (id) => {
  await exports.buscarCategoriaPorId(id);
  await prisma.categoria.delete({ where: { id } });
  return { mensagem: "Categoria deletada com sucesso" };
};
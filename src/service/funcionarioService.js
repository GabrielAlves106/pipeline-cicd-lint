const model = require("../models/funcionarioModel");

async function criarFuncionario(data) {
  if (!data.nome) throw new Error("Nome obrigatório");
  return model.criar(data.nome, data.cargo);
}

async function atualizarFuncionario(id, data) {
  return model.atualizar(id, data.nome, data.cargo);
}

async function deletarFuncionario(id) {
  return model.deletar(id);
}

module.exports = {
  criarFuncionario,
  atualizarFuncionario,
  deletarFuncionario
};
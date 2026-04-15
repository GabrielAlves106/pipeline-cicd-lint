const service = require("../src/service/funcionarioService");

describe("Funcionario Service", () => {

  test("Deve criar funcionário", async () => {
    const result = await service.criarFuncionario({
      nome: "Gabriel",
      cargo: "Dev"
    });

    expect(result).toBeDefined();
  });

  test("Deve atualizar funcionário", async () => {
    const result = await service.atualizarFuncionario(1, {
      nome: "Gabriel Atualizado",
      cargo: "Senior"
    });

    expect(result).toBeDefined();
  });

  test("Deve deletar funcionário", async () => {
    const result = await service.deletarFuncionario(1);

    expect(result).toBeDefined();
  });

});
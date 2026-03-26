const express = require("express");
const router = express.Router();
const service = require("../service/funcionarioService");

router.post("/", async (req, res) => {
  const result = await service.criarFuncionario(req.body);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const result = await service.atualizarFuncionario(req.params.id, req.body);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await service.deletarFuncionario(req.params.id);
  res.json(result);
});

module.exports = router;
const db = require("../db");

async function criar(nome, cargo) {
  const [result] = await db.execute(
    "INSERT INTO employees (name, role) VALUES (?, ?)",
    [nome, cargo]
  );
  return result;
}

async function atualizar(id, nome, cargo) {
  const [result] = await db.execute(
    "UPDATE employees SET name = ?, role = ? WHERE id = ?",
    [nome, cargo, id]
  );
  return result;
}

async function deletar(id) {
  const [result] = await db.execute(
    "DELETE FROM employees WHERE id = ?",
    [id]
  );
  return result;
}

module.exports = { criar, atualizar, deletar };
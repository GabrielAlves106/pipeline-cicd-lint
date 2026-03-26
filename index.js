const express = require("express");
const app = express();

app.use(express.json());

const funcionarioRoutes = require("./src/routes/funcionarioRoutes");
app.use("/funcionarios", funcionarioRoutes);

app.listen(3000, () => console.log("API rodando"));
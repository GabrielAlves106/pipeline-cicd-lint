import express from "express";

const app = express();

app.use(express.json());

const funcionarioRoutes = (await import("./src/routes/funcionarioRoutes.js")).default;
app.use("/funcionarios", funcionarioRoutes);

app.listen(3000, () => console.log("API rodando"));
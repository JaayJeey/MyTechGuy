const express = require('express');
const cors = require('cors');
const tecnicosRoutes = require('./routes/tecnicos'); // Importa as rotas dos técnicos

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Permite trabalhar com JSON no corpo das requisições

// Rotas
app.use(tecnicosRoutes); // Usa as rotas de técnicos

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

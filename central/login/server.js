const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Importar as rotas
const tecnicosRoutes = require('./routes/tecnicos');

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Para interpretar o corpo das requisições como JSON

// Usar as rotas de login
app.use('/api', tecnicosRoutes);

// Rota principal para teste
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

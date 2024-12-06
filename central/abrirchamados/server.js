const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint de solicitação
app.post('/solicitar', (req, res) => {
    const { cep, rua, numero, cidade, produto, defeito, problema } = req.body;

    // Aqui, no seu caso, vamos apenas simular que os dados foram salvos com sucesso.
    console.log('Dados recebidos:', req.body);

    // Resposta de sucesso
    res.status(200).json({ message: 'Solicitação enviada com sucesso!' });
});

// Rodar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let chamados = [
    { id: 1, cliente: 'João Silva', descricao: 'Troca de tela', status: 'Em andamento' },
    { id: 2, cliente: 'Maria Oliveira', descricao: 'Atualização de sistema', status: 'Em andamento' }
];

app.use(bodyParser.json());

// Endpoint para obter todos os chamados
app.get('/chamados', (req, res) => {
    res.json(chamados);
});

// Endpoint para adicionar um novo chamado
app.post('/chamados', (req, res) => {
    const novoChamado = req.body;
    chamados.push(novoChamado);
    res.status(201).json(novoChamado);
});

// Endpoint para atualizar o status de um chamado
app.put('/chamados/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    let chamado = chamados.find(ch => ch.id == id);
    if (chamado) {
        chamado.status = status;
        res.json(chamado);
    } else {
        res.status(404).json({ message: 'Chamado não encontrado' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`API de chamados funcionando em http://localhost:${port}`);
});

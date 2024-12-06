const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/meutecnico', { useNewUrlParser: true, useUnifiedTopology: true });

const ChamadoSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    status: String,
    dataCriacao: { type: Date, default: Date.now },
});

const Chamado = mongoose.model('Chamado', ChamadoSchema);

// Criar um novo chamado
app.post('/api/chamados', async (req, res) => {
    const { titulo, descricao } = req.body;
    const chamado = new Chamado({ titulo, descricao, status: 'Em andamento' });
    await chamado.save();
    res.status(201).json(chamado);
});

// Obter todos os chamados
app.get('/api/chamados', async (req, res) => {
    const chamados = await Chamado.find();
    res.json(chamados);
});

// Obter um chamado específico
app.get('/api/chamados/:id', async (req, res) => {
    const chamado = await Chamado.findById(req.params.id);
    res.json(chamado);
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

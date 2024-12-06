const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const dbFile = './chamados.json'; // Arquivo JSON onde os chamados serão salvos

app.use(cors());
app.use(bodyParser.json());

// Função para ler os dados do arquivo JSON
function readChamados() {
    if (!fs.existsSync(dbFile)) {
        return []; // Se o arquivo não existir, retorna uma lista vazia
    }
    const data = fs.readFileSync(dbFile);
    return JSON.parse(data);
}

// Função para salvar os dados no arquivo JSON
function saveChamados(chamados) {
    fs.writeFileSync(dbFile, JSON.stringify(chamados, null, 2)); // Salva o array no arquivo
}

app.post('/solicitar', (req, res) => {
    const { cep, rua, numero, cidade, produto, defeito, problema } = req.body;

    // Carrega os chamados atuais
    const chamados = readChamados();

    // Cria um novo chamado
    const novoChamado = {
        id: chamados.length + 1,
        cep, rua, numero, cidade, produto, defeito, problema, status: 'pendente'
    };

    // Adiciona o novo chamado à lista e salva
    chamados.push(novoChamado);
    saveChamados(chamados);

    res.status(200).json({ message: 'Solicitação enviada com sucesso!' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

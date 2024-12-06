const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON onde os técnicos são armazenados
const dataPath = path.join(__dirname, '../data/db.json');

// Função para ler dados do arquivo JSON
const readData = () => {
  if (!fs.existsSync(dataPath)) {
    return { tecnicos: [] }; // Retorna um objeto padrão se o arquivo não existir
  }
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
};

// Função para salvar dados no arquivo JSON
const saveData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
};

// Rota para cadastrar um técnico
router.post('/api/cadastrar-tecnico', (req, res) => {
  const { nome, email, senha } = req.body;

  // Valida os campos obrigatórios
  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const data = readData();

  // Cria um novo técnico
  const novoTecnico = {
    id: Date.now(),
    nome,
    email,
    senha,
  };

  // Adiciona o técnico à lista
  data.tecnicos = data.tecnicos || [];
  data.tecnicos.push(novoTecnico);

  // Salva os dados atualizados no arquivo JSON
  saveData(data);

  res.status(201).json({ message: 'Técnico cadastrado com sucesso!', tecnico: novoTecnico });
});

// Exporta as rotas
module.exports = router;

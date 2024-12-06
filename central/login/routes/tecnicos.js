const express = require('express');
const router = express.Router();

// Dados fictícios de usuários para simulação de login (substitua com banco de dados real)
const usuarios = [
    { email: 'cliente@example.com', senha: '12345', tipo: 'cliente' },
    { email: 'tecnico@example.com', senha: '67890', tipo: 'tecnico' }
];

// Rota de login para clientes
router.post('/login/cliente', (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(u => u.email === email && u.senha === senha && u.tipo === 'cliente');

    if (usuario) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'E-mail ou senha inválidos para cliente.' });
    }
});

// Rota de login para técnicos
router.post('/login/tecnico', (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(u => u.email === email && u.senha === senha && u.tipo === 'tecnico');

    if (usuario) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'E-mail ou senha inválidos para técnico.' });
    }
});

module.exports = router;

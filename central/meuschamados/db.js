const mysql = require('mysql');

// Criando a conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chamados_db'
});

// Conectando ao banco de dados
db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

module.exports = db;

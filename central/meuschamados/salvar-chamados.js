// Exemplo de como adicionar um novo chamado
const novosChamados = [
    { id: "1", titulo: "Problema com o computador", descricao: "Computador travando", status: "Aberto" },
    { id: "2", titulo: "Problema na TV", descricao: "Tela piscando", status: "Em andamento" }
];

// Salva no localStorage com a chave 'chamados'
localStorage.setItem('chamados', JSON.stringify(novosChamados));

console.log('Chamados adicionados ao localStorage');

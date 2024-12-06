// Escuta o evento de submit do formulário
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário (a página não será recarregada)

    // Coleta os dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        endereco: document.getElementById('endereco').value,
        telefone: document.getElementById('telefone').value,
        // Adicione outros campos conforme necessário
    };

    // Envia os dados para o backend
    fetch('/cadastro_tecnico', { // Este endpoint pode ser /cadastro_cliente ou outro dependendo de como for configurado
        method: 'POST',  // O método HTTP será POST
        headers: {
            'Content-Type': 'application/json',  // Tipo de dado que estamos enviando (JSON)
        },
        body: JSON.stringify(formData),  // Converte o objeto JavaScript para JSON
    })
    .then(response => response.json())  // Converte a resposta para JSON
    .then(data => {
        // Exibe uma mensagem de sucesso ou erro
        alert(data.message);
    })
    .catch(error => {
        console.error('Erro ao cadastrar:', error);  // Caso aconteça algum erro
    });
});

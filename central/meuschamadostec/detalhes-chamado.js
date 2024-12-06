// Função para carregar os detalhes do chamado
function carregarDetalhes() {
    const chamado = JSON.parse(localStorage.getItem('chamadoDetalhado'));
    if (chamado) {
        const container = document.getElementById('detalhes-container');
        container.innerHTML = `
            <h2>Detalhes do Chamado</h2>
            <p><strong>Cliente:</strong> ${chamado.cliente}</p>
            <p><strong>Descrição:</strong> ${chamado.descricao}</p>
            <p><strong>Status:</strong> ${chamado.status}</p>
        `;
    } else {
        alert('Chamado não encontrado.');
    }
}

// Função para voltar à página de chamados
function voltar() {
    window.location.href = "meuschamados.html";  // Redireciona de volta para a lista de chamados
}

// Carregar os detalhes do chamado ao iniciar a página
window.onload = carregarDetalhes;

document.addEventListener('DOMContentLoaded', function () {
    const id = new URLSearchParams(window.location.search).get('id');
    const detalhesContainer = document.getElementById('detalhes-container');
    const chamados = JSON.parse(localStorage.getItem('chamados')) || [];
    const chamado = chamados.find(c => c.id === id);

    if (chamado) {
        detalhesContainer.innerHTML = `
            <h2>${chamado.titulo}</h2>
            <p><strong>Descrição:</strong> ${chamado.descricao}</p>
            <p><strong>Status:</strong> ${chamado.status}</p>
        `;
    } else {
        detalhesContainer.innerHTML = '<p>Chamado não encontrado.</p>';
    }
});

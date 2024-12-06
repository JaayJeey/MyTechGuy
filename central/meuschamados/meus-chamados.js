// Carregar os chamados do localStorage
document.addEventListener('DOMContentLoaded', function () {
    const chamadosContainer = document.getElementById('chamados-container');
    const chamados = JSON.parse(localStorage.getItem('chamados')) || [];

    // Verifica se existem chamados para exibir
    if (chamados.length === 0) {
        chamadosContainer.innerHTML = '<p>Nenhum chamado registrado.</p>';
    } else {
        chamados.forEach(chamado => {
            const chamadoCard = document.createElement('div');
            chamadoCard.classList.add('chamado-card');
            chamadoCard.innerHTML = `
                <h3>${chamado.titulo}</h3>
                <p>${chamado.descricao}</p>
                <p>Status: ${chamado.status}</p>
                <a href="detalhes.html?id=${chamado.id}">
                    <button class="btn-detalhes">Ver Detalhes</button>
                </a>
            `;
            chamadosContainer.appendChild(chamadoCard);
        });
    }
});

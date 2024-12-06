// Função para carregar os chamados da API
function carregarChamados() {
    fetch('http://localhost:3000/chamados')
        .then(response => response.json())
        .then(chamados => {
            const container = document.getElementById("chamados-container");
            container.innerHTML = "";

            chamados.forEach((chamado) => {
                const card = document.createElement("div");
                card.classList.add("chamado-card");

                card.innerHTML = `
                    <h3>Chamado #${chamado.id}</h3>
                    <p><strong>Cliente:</strong> ${chamado.cliente}</p>
                    <p><strong>Descrição:</strong> ${chamado.descricao}</p>
                    <p><strong>Status:</strong> ${chamado.status}</p>
                    <button class="btn-finalizar" onclick="finalizarChamado(${chamado.id})">Finalizar</button>
                    <button class="btn-detalhes" onclick="visualizarDetalhes(${chamado.id})">Visualizar Mais Detalhes</button>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar chamados:', error));
}

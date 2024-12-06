async function salvarAlteracoes() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const cpf = document.getElementById('cpf').value;
    const especialidades = document.getElementById('especialidades') ? document.getElementById('especialidades').value : '';

    const dadosAtualizados = {
        nome,
        email,
        telefone,
        endereco,
        cpf,
        especialidades
    };

    // Envia os dados para o servidor
    try {
        const response = await fetch('http://localhost:3000/clientes/1', { // Para cliente 1, por exemplo
            method: 'PUT', // Atualiza o registro
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosAtualizados),
        });
        
        if (response.ok) {
            alert('Alterações salvas com sucesso!');
        } else {
            alert('Erro ao salvar as alterações!');
        }
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
    }
}

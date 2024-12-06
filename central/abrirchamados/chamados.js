document.getElementById('solicitacao-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const produto = document.getElementById('produto').value;
    const defeito = document.getElementById('defeito').value;
    const problema = document.getElementById('problema').value;

    const data = {
        cep,
        rua,
        numero,
        cidade,
        produto,
        defeito,
        problema
    };

    fetch('http://localhost:3000/solicitar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            document.getElementById('success-message').style.display = 'block';
        } else {
            document.getElementById('error-message').style.display = 'block';
        }
    })
    .catch(error => {
        document.getElementById('error-message').style.display = 'block';
    });
});

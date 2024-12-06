document.addEventListener("DOMContentLoaded", () => {
    // Login de cliente
    const loginClienteForm = document.querySelector("form#loginCliente");
    if (loginClienteForm) {
        loginClienteForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = loginClienteForm.email.value.trim();
            const senha = loginClienteForm.senha.value.trim();

            // Requisição ao backend para validar o login de cliente
            fetch("http://localhost:3000/api/login/cliente", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, senha })
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        alert("Login realizado com sucesso!");
                        window.location.href = "homecliente.html"; // Redireciona para a página do cliente
                    } else {
                        alert("E-mail ou senha inválidos para cliente!");
                    }
                })
                .catch((error) => {
                    console.error("Erro ao fazer login:", error);
                    alert("Ocorreu um erro ao tentar fazer login.");
                });
        });
    }

    // Login de técnico
    const loginTecnicoForm = document.querySelector("form#loginTecnico");
    if (loginTecnicoForm) {
        loginTecnicoForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = loginTecnicoForm.email.value.trim();
            const senha = loginTecnicoForm.senha.value.trim();

            // Requisição ao backend para validar o login de técnico
            fetch("http://localhost:3000/api/login/tecnico", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, senha })
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        alert("Login realizado com sucesso!");
                        window.location.href = "hometecnico.html"; // Redireciona para a página do técnico
                    } else {
                        alert("E-mail ou senha inválidos para técnico!");
                    }
                })
                .catch((error) => {
                    console.error("Erro ao fazer login:", error);
                    alert("Ocorreu um erro ao tentar fazer login.");
                });
        });
    }
});

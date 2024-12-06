document.addEventListener('DOMContentLoaded', function () {
    const imageItems = document.querySelectorAll('.image-item');

    // Função para adicionar classe "visible" diretamente, sem observer
    imageItems.forEach(item => {
        item.classList.add('visible'); // Todas as imagens serão exibidas
    });

    // Botões para navegação suave
    const serviceButton = document.querySelector('.service-button');
    const aboutButton = document.querySelector('.about-button');
    const helpButton = document.querySelector('.help-button');

    if (serviceButton) {
        serviceButton.addEventListener('click', function () {
            document.querySelector('.image-item:nth-child(1)').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (aboutButton) {
        aboutButton.addEventListener('click', function () {
            document.querySelector('.image-item:nth-child(2)').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (helpButton) {
        helpButton.addEventListener('click', function () {
            document.querySelector('.image-item:nth-child(3)').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

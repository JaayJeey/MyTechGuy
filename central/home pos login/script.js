// Detectar rolagem e aplicar transição às imagens
document.addEventListener('DOMContentLoaded', function () {
    const imageItems = document.querySelectorAll('.image-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    imageItems.forEach(item => observer.observe(item));
});

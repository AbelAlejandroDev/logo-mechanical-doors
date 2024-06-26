document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const logoContainer = document.getElementById('logo-container');
    const overlay = document.getElementById('overlay');

    logo.addEventListener('click', () => {
        logoContainer.classList.add('open');
        
        // Ocultar el overlay después de la animación
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000); // Duración de la animación (1s)
    });
});

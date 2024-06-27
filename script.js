document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.getElementById('logo-container');
    const logo = document.querySelector('#logo img');
    const overlay = document.getElementById('overlay');
    const loading = document.getElementById('loading');

    // Mostrar loading inicialmente
    loading.style.display = 'flex';

    // Función para ocultar el loading con efecto de desvanecimiento
    function ocultarLoading() {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }

    // Función para abrir las puertas al hacer clic en el logo
    function abrirPuertas() {
        logo.classList.add('rotate');

        // Esperar a que la rotación termine antes de abrir las puertas
        setTimeout(() => {
            overlay.style.display = 'block';
            setTimeout(() => {
                logoContainer.classList.add('open');
            }, 50);

            // Ocultar puertas y logo después de la animación
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 2000);
        }, 1000);
    }

    // Evento que se dispara cuando todas las imágenes están cargadas
    window.addEventListener('load', function() {
        setTimeout(() => {
            ocultarLoading();
        }, 2000);
    });

    // Evento clic en el logo para abrir las puertas
    logoContainer.addEventListener('click', function() {
        abrirPuertas();
    });
});

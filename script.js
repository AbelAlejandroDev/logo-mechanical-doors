document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.getElementById('logo-container');
    const overlay = document.getElementById('overlay');
    const loading = document.getElementById('loading');

    // Mostrar loading inicialmente
    loading.style.display = 'flex'; // Mostrar el loading al inicio

    // Función para ocultar el loading con efecto de desvanecimiento
    function ocultarLoading() {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500); // Desvanecimiento del loading después de 0.5 segundos
    }

    // Función para abrir las puertas al hacer clic en el logo
    function abrirPuertas() {
        // Mostrar overlay con las puertas y el logo
        overlay.style.display = 'block';

        // Ejemplo de animación de puertas en el logoContainer
        setTimeout(() => {
            logoContainer.classList.add('open'); // Agregar clase para abrir las puertas
        }, 50); // Retraso mínimo para asegurar que la transición se active inmediatamente

        // Ocultar puertas y logo después de la animación
        setTimeout(() => {
            overlay.style.display = 'none'; // Ocultar el overlay después de la animación
        }, 2000); // Ajusta el tiempo según la duración de tu animación
    }

    // Evento que se dispara cuando todas las imágenes están cargadas
    window.addEventListener('load', function() {
        // Simulación de carga de contenido (reemplaza con tu lógica real)
        setTimeout(() => {
            ocultarLoading(); // Ocultar el loading después de un breve retraso
        }, 2000); // Simula una carga mínima de 2 segundos
    });

    // Evento clic en el logo para abrir las puertas
    logoContainer.addEventListener('click', function() {
        abrirPuertas(); // Abrir las puertas al hacer clic en el logo
    });
});
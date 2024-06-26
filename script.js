document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.getElementById('logo-container');
    const overlay = document.getElementById('overlay');
    const loading = document.getElementById('loading');

    // Mostrar loading inicialmente
    loading.style.display = 'flex'; // Cambiado a 'flex' para centrar el contenido

    // Función para ocultar el loading y mostrar el contenido
    function mostrarContenido() {
        loading.style.display = 'none';
        overlay.style.display = 'block'; // Mostrar el overlay con el logo
    }

    // Cuando se hace clic en el logo, abrir las puertas
    logoContainer.addEventListener('click', function() {
        // Ejemplo de animación de puerta en el logoContainer
        logoContainer.classList.add('open');

        // Ocultar el overlay después de la animación
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000); // Duración de la animación (1s)
    });

    // Evento que se dispara cuando todas las imágenes están cargadas
    function imagenesCargadas() {
        const imagenes = document.querySelectorAll("#logo img");
        const totalImagenes = imagenes.length;
        let imagenesCargadas = 0;

        // Verificar si todas las imágenes están cargadas
        function verificarCarga() {
            imagenesCargadas++;
            if (imagenesCargadas === totalImagenes) {
                mostrarContenido();
            }
        }

        // Agregar evento de carga a cada imagen
        imagenes.forEach(function(img) {
            if (img.complete) {
                verificarCarga();
            } else {
                img.addEventListener("load", verificarCarga);
            }
        });
    }

    // Llamar a la función cuando todas las imágenes estén cargadas
    imagenesCargadas();
});

const w = window
const d = document

document.addEventListener('DOMContentLoaded', function () {
    const logoContainer = document.getElementById('logo-container');
    const logoImg = document.querySelector('#logo img');
    const overlay = document.getElementById('overlay');
    const loading = d.getElementById('loading');

    function abrirPuertas() {
        logoImg.classList.add('rotate', 'blue-blur');

        // Esperar a que la rotación termine antes de abrir las puertas
        setTimeout(() => {
            overlay.style.display = 'block';
            setTimeout(() => {
                logoContainer.classList.add('open');
            }, 150);

            // Ocultar puertas y logo después de la animación
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1500);
        }, 1000);
    }


    window.addEventListener('load', function () {
        setTimeout(() => {
            loading.classList.add('hidden')
        }, 1500);
    });

    // Evento clic en el logo para abrir las puertas
    logoContainer.addEventListener('click', function () {
        abrirPuertas();
    });

})
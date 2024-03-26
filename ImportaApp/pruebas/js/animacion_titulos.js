window.onload = function () {
    const texts = document.querySelectorAll('.text-container h1');

    // Duplica los cajones para crear un scroll infinito
    const cajonesScroll = document.querySelector('.titulos');
    cajonesScroll.innerHTML += cajonesScroll.innerHTML;



    // Función para manejar el reinicio de la animación
    function restartAnimation() {
        // Reinicia la animación de scroll horizontal
        cajonesScroll.style.animation = 'none';
        cajonesScroll.offsetHeight; /* Activa un repaint, sin esto la animación no se reinicia */
        cajonesScroll.style.animation = 'scroll 0s linear infinite';
    }

    // Escucha el evento 'animationiteration' para reiniciar la animación
    cajonesScroll.addEventListener('animationiteration', restartAnimation);

    // Función para mostrar y ocultar los textos
    async function animateTexts() {
        while (true) {
            for (let i = 0; i < texts.length; i++) {
                texts[i].style.opacity = '1'; // Mostrar el h1
                await new Promise(resolve => setTimeout(resolve, 3000)); // Esperar 2 segundos
                texts[i].style.opacity = '0'; // Ocultar el h1
                await new Promise(resolve => setTimeout(resolve, 500)); // Esperar medio segundo
            }
        }
    }

    // Inicia la animación de los textos
    animateTexts();
};
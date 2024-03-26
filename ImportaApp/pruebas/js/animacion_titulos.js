function animateTexts() {
    const texts = ["Ecosistema de negocios internacionales", "Servicio bajo demanda", "Logística verde", "Blockchain en la cadena de suministros", "Economía colaborativa"];
    let index = 0;
    const textContainer = document.querySelector('.text-container');

    function showNextText() {
        textContainer.textContent = texts[index];
        gsap.fromTo(textContainer, { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.to(textContainer, { opacity: 0, duration: 0.5, delay: 1 });
        index = (index + 1) % texts.length; // Avanzar al siguiente texto circularmente
    }

    // Mostrar el primer texto al iniciar
    showNextText();

    // Repetir la animación cada 2 segundos
    setInterval(showNextText, 2000);
}

// Inicia la animación de los textos
animateTexts();

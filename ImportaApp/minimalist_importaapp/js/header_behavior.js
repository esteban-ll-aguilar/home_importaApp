$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('header-scrolled');
            // Cambiar el logo al hacer scroll
            $('.header-logo').attr('src', 'images/logo_letra_negra.png');

        } else {
            $('.header').removeClass('header-scrolled');
            // Volver al logo original cuando se está en la parte superior de la página
            $('.header-logo').attr('src', 'images/logo_letra_negra.png');
        }
    });
});


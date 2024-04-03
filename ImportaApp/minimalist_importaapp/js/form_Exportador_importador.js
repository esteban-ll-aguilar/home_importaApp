document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Detiene el envío del formulario por defecto para que puedas realizar la validación

    // Recupera los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var servicio = document.getElementById("servicio").value;

    // Expresión regular para la validación del correo electrónico
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Obtiene la fecha y hora actual para incluirlas en el mensaje
    var now = new Date();
    var fecha = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    var hora = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

    if (!regex.test(email)) {
        // Si el correo no es válido, muestra el mensaje de error
        document.getElementById('emailError').style.display = 'block';
    } else {
        // Si el correo es válido, oculta el mensaje de error y redirige a WhatsApp
        document.getElementById('emailError').style.display = 'none';

        // Prepara el mensaje para enviar por WhatsApp
        var mensaje = "-------------------------\n" +
            "Importa App - Formulario de Importador / Exportador\n" + "-------------------------\n" +
            "Fecha y Hora: " + fecha + " " + hora + "\n" +
            "-------------------------\n" +
            "Nombre y Apellido: " + nombre + "\n" +
            "Correo Electrónico: " + email + "\n" +
            "Celular: " + celular + "\n" +
            "Servicio Interesado: " + servicio;

        // Construye el enlace de WhatsApp y redirige al usuario
        var whatsappLink = "https://wa.me/593980029920?text=" + encodeURIComponent(mensaje);
        window.location.href = whatsappLink;
    }
});

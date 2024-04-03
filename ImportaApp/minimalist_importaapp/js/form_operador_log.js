document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var razon_social = document.getElementById("razon_social").value;
    var ruc = document.getElementById("ruc").value;
    var servicio_ofrecido = document.getElementById("servicio_ofrecido").value;

    var now = new Date();
    var fecha = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    var hora = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


    if (!regex.test(email)) {
        // Si el correo no es válido, muestra el mensaje de error
        document.getElementById('emailError').style.display = 'block';
    } else {
        // Si el correo es válido, oculta el mensaje de error y redirige a WhatsApp
        document.getElementById('emailError').style.display = 'none';

        // Prepara el mensaje para enviar por WhatsApp
        var mensaje = "Formulario de Operador Logístico\n" + "-------------------------\n" +
            "Fecha y Hora: " + fecha + " " + hora + "\n" +
            "-------------------------\n" +
            "Nombre y Apellido: " + nombre + "\n" +
            "Correo Electrónico: " + email + "\n" +
            "Celular: " + celular + "\n" +
            "Razón Social de la Empresa: " + razon_social + "\n" +
            "RUC de la Empresa: " + ruc + "\n" +
            "Servicio que Ofrece: " + servicio_ofrecido;

        var whatsappLink = "https://wa.me/593959736777?text=" + encodeURIComponent(mensaje);
        window.location.href = whatsappLink;
    }



});
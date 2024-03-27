document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var servicio = document.getElementById("servicio").value;

    var now = new Date();
    var fecha = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    var hora = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

    var mensaje = "-------------------------\n" +
        "Importa App - Formulario de Importador / Exportador\n" + "-------------------------\n" +
        "Fecha y Hora: " + fecha + " " + hora + "\n" +
        "-------------------------\n" +
        "Nombre y Apellido: " + nombre + "\n" +
        "Correo Electrónico: " + email + "\n" +
        "Celular: " + celular + "\n" +
        "Servicio Interesado: " + servicio;

    var whatsappLink = "https://wa.me/593980029920?text=" + encodeURIComponent(mensaje);
    window.location.href = whatsappLink;
});
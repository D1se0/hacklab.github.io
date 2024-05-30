function validarFlag() {
    var flag = document.getElementById("flag").value;
    var mensaje = "";
    if (flag === "Q29kaWdvOiBnaG9zdHjlc3VlbHRv") {
        mensaje = "¡Has completado el CTF!";
        mostrarAlerta(mensaje, "success");
    } else {
        mensaje = "La flag de root es incorrecta.";
        mostrarAlerta(mensaje, "danger");
    }
    return false; // Evita que el formulario se envíe
}

function mostrarAlerta(mensaje, tipo) {
    var alerta = document.createElement("div");
    alerta.className = "alert alert-" + tipo;
    alerta.textContent = mensaje;
    var container = document.querySelector(".flag-form");
    container.insertBefore(alerta, container.firstChild);
    setTimeout(function () {
        alerta.remove();
    }, 3000);
}
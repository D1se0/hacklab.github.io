function typeOverflowDescription() {
    const overflowDescriptionText = "get CTF-easy";
    let overflowIndex = 0;
    const overflowDescriptionElement = document.getElementById("terminal7");
    overflowDescriptionElement.innerHTML = ''; // Limpiamos el contenido previo antes de escribir de nuevo

    function typeOverflowCharacter() {
        if (overflowIndex < overflowDescriptionText.length) {
            overflowDescriptionElement.innerHTML += overflowDescriptionText.charAt(overflowIndex);
            overflowIndex++;
            setTimeout(typeOverflowCharacter, 50); // Ajusta la velocidad de escritura aquí (en milisegundos)
        } else {
            setTimeout(function () {
                typeOverflowDescription(); // Llama a typeOverflowDescription nuevamente después de que se complete la descripción
            }, 10000); // Espera 10 segundos antes de iniciar la escritura nuevamente
        }
    }

    typeOverflowCharacter(); // Inicia el proceso de escritura de caracteres
}

typeOverflowDescription(); // Inicia la escritura de la descripción

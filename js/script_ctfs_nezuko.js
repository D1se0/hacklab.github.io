function typeNezukoDescription() {
    const nezukoDescription = "get CTF-intermediate";
    let index = 0;
    const descriptionElement = document.getElementById("terminal6");
    descriptionElement.innerHTML = ''; // Limpiamos el contenido previo antes de escribir de nuevo

    function typeCharacter() {
        if (index < nezukoDescription.length) {
            descriptionElement.innerHTML += nezukoDescription.charAt(index);
            index++;
            setTimeout(typeCharacter, 50); // Ajusta la velocidad de escritura aquí (en milisegundos)
        } else {
            setTimeout(function () {
                typeNezukoDescription(); // Llama a typeNezukoDescription nuevamente después de que se complete la descripción
            }, 10000); // Espera 10 segundos antes de iniciar la escritura nuevamente
        }
    }

    typeCharacter(); // Inicia el proceso de escritura de caracteres
}

typeNezukoDescription(); // Inicia la escritura de la descripción

const terminalText = "get CTF-Easy";

function typeTerminal() {
    let index = 0;
    const terminalElement = document.getElementById("terminal");
    terminalElement.innerHTML = ''; // Limpiamos el contenido previo antes de escribir de nuevo

    function typeCharacter() {
        if (index < terminalText.length) {
            terminalElement.innerHTML += terminalText.charAt(index);
            index++;
            setTimeout(typeCharacter, 50); // Ajusta la velocidad de escritura aquí (en milisegundos)
        } else {
            setTimeout(typeTerminal, 10000); // Llama a typeTerminal nuevamente después de 10 segundos
        }
    }

    typeCharacter(); // Inicia el proceso de escritura de caracteres
}

typeTerminal(); // Inicia el primer ciclo de escritura
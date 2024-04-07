function typeTerminal4() {
    const terminalText4 = "get CTF-intermediate";
    let index = 0;
    const terminalElement = document.getElementById("terminal4");
    terminalElement.innerHTML = ''; // Limpiamos el contenido previo antes de escribir de nuevo

    function typeCharacter() {
        if (index < terminalText4.length) {
            terminalElement.innerHTML += terminalText4.charAt(index);
            index++;
            setTimeout(typeCharacter, 50); // Ajusta la velocidad de escritura aquí (en milisegundos)
        } else {
            setTimeout(typeTerminal4, 10000); // Llama a typeTerminal nuevamente después de 10 segundos
        }
    }

    typeCharacter(); // Inicia el proceso de escritura de caracteres
}

typeTerminal4(); // Inicia el primer ciclo de escritura

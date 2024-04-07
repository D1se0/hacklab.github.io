function typeTerminal3() {
    const terminalText3 = "get CTF-hard";
    let index = 0;
    const terminalElement = document.getElementById("terminal3");
    terminalElement.innerHTML = ''; // Limpiamos el contenido previo antes de escribir de nuevo

    function typeCharacter() {
        if (index < terminalText3.length) {
            terminalElement.innerHTML += terminalText3.charAt(index);
            index++;
            setTimeout(typeCharacter, 50); // Ajusta la velocidad de escritura aquí (en milisegundos)
        } else {
            setTimeout(typeTerminal3, 10000); // Llama a typeTerminal nuevamente después de 10 segundos
        }
    }

    typeCharacter(); // Inicia el proceso de escritura de caracteres
}

typeTerminal3(); // Inicia el primer ciclo de escritura

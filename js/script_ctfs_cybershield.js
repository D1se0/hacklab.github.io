function typeTerminalCyb3rSh1eld() {
    const terminalTextCyb3rSh1eld = "get CTF-intermediate";
    let index = 0;
    const terminalElement = document.getElementById("terminal5");
    terminalElement.innerHTML = ''; // Limpiamos el contenido previo antes de escribir de nuevo

    function typeCharacter() {
        if (index < terminalTextCyb3rSh1eld.length) {
            terminalElement.innerHTML += terminalTextCyb3rSh1eld.charAt(index);
            index++;
            setTimeout(typeCharacter, 50); // Ajusta la velocidad de escritura aquí (en milisegundos)
        } else {
            setTimeout(typeTerminalCyb3rSh1eld, 10000); // Llama a typeTerminalCyb3rSh1eld nuevamente después de 10 segundos
        }
    }

    typeCharacter(); // Inicia el proceso de escritura de caracteres
}

typeTerminalCyb3rSh1eld(); // Inicia el primer ciclo de escritura

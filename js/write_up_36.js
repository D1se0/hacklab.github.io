
// Función para simular la escritura automática en la terminal
function typeTerminal() {
    const terminalText = "cat MoneyBox.txt";
    let index = 0;
    const terminalElement = document.getElementById("terminalText");

    function typeCharacter() {
        if (index < terminalText.length) {
            terminalElement.textContent += terminalText.charAt(index);
            index++;
        } else {
            clearInterval(intervalId);
            setTimeout(clearTerminal, 10000); // Esperar 1 segundo antes de borrar y comenzar de nuevo
        }
    }

    function clearTerminal() {
        terminalElement.textContent = "root@WriteUpMoneyBox~# "; // Restaurar el prefijo
        index = 0;
        intervalId = setInterval(typeCharacter, 100); // Iniciar el bucle de nuevo
    }

    let intervalId = setInterval(typeCharacter, 100);
}

// Llamar a la función para iniciar la escritura automática
typeTerminal();
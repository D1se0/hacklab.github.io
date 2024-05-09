document.addEventListener('DOMContentLoaded', function () {
    const overflowMoreInfoBtn = document.getElementById('overflowMoreInfoBtn');
    const overflowAdditionalInfo = document.querySelector('.additional-info');

    overflowMoreInfoBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Evita que el enlace cambie la página

        if (overflowAdditionalInfo.style.display === 'none' || overflowAdditionalInfo.style.display === '') {
            overflowAdditionalInfo.style.display = 'block';
            overflowMoreInfoBtn.textContent = 'Menos Información'; // Cambia el texto del botón
        } else {
            overflowAdditionalInfo.style.display = 'none';
            overflowMoreInfoBtn.textContent = 'Más Información'; // Cambia el texto del botón
        }
    });
});

// Función para simular la escritura automática en la terminal
function typeOverflowTerminal() {
    const overflowTerminalText = "Detalles del CTF Overflow Easy";
    let overflowIndex = 0;
    const overflowTerminalElement = document.getElementById("overflowTerminalText");

    function typeOverflowCharacter() {
        if (overflowIndex < overflowTerminalText.length) {
            overflowTerminalElement.textContent += overflowTerminalText.charAt(overflowIndex);
            overflowIndex++;
        } else {
            clearInterval(overflowIntervalId);
            setTimeout(clearOverflowTerminal, 10000); // Esperar 1 segundo antes de borrar y comenzar de nuevo
        }
    }

    function clearOverflowTerminal() {
        overflowTerminalElement.textContent = "root@CTF~# "; // Restaurar el prefijo
        overflowIndex = 0;
        overflowIntervalId = setInterval(typeOverflowCharacter, 100); // Iniciar el bucle de nuevo
    }

    let overflowIntervalId = setInterval(typeOverflowCharacter, 100);
}

// Llamar a la función para iniciar la escritura automática
typeOverflowTerminal();

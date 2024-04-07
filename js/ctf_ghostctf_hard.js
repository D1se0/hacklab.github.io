document.addEventListener('DOMContentLoaded', function () {
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const additionalInfo = document.querySelector('.additional-info');

    moreInfoBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Evita que el enlace cambie la página

        if (additionalInfo.style.display === 'none') {
            additionalInfo.style.display = 'block';
            moreInfoBtn.textContent = 'Menos Información'; // Cambia el texto del botón
        } else {
            additionalInfo.style.display = 'none';
            moreInfoBtn.textContent = 'Más Información'; // Cambia el texto del botón
        }
    });
});

// Función para simular la escritura automática en la terminal
function typeTerminal() {
    const terminalText = "Detalles del CTF Ghost Hard";
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
        terminalElement.textContent = "root@CTF~# "; // Restaurar el prefijo
        index = 0;
        intervalId = setInterval(typeCharacter, 100); // Iniciar el bucle de nuevo
    }

    let intervalId = setInterval(typeCharacter, 100);
}

// Llamar a la función para iniciar la escritura automática
typeTerminal();

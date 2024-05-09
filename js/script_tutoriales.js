document.addEventListener('DOMContentLoaded', function () {
    const moreInfoButtons = document.querySelectorAll('.more-info-button');

    moreInfoButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tutorial = button.closest('.tutorial');
            const additionalInfo = tutorial.querySelector('.additional-info');
            additionalInfo.classList.toggle('show');

            // Cambiar el texto del botón según el estado de la información adicional
            if (additionalInfo.classList.contains('show')) {
                button.textContent = 'Menos Información';
            } else {
                button.textContent = 'Más Información';
            }
        });
    });
});

// Función para simular la escritura automática en la terminal
function typeTerminal() {
    const terminalText = "Apartado de tutoriales para la creacion de maquinas vulnerables";
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
        terminalElement.textContent = "root@Tutoriales~# "; // Restaurar el prefijo
        index = 0;
        intervalId = setInterval(typeCharacter, 100); // Iniciar el bucle de nuevo
    }

    let intervalId = setInterval(typeCharacter, 100);
}

// Llamar a la función para iniciar la escritura automática
typeTerminal();

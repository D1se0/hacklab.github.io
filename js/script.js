document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const textArray = ["Sitio de Hacking Ético", "Aprende de forma práctica", "Mejora tus habilidades éticamente"];
    let index = 0;
    let letterIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        currentText = textArray[index];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, currentText.length - letterIndex);
            letterIndex--;
            if (letterIndex === 0) {
                isDeleting = false;
                index++;
                if (index === textArray.length) {
                    index = 0;
                }
                setTimeout(type, 1500); // Tiempo de espera después de borrar el texto
                return;
            }
        } else {
            textElement.textContent = currentText.substring(0, letterIndex);
            letterIndex++;
            if (letterIndex > currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Tiempo de espera después de escribir el texto completo
                return;
            }
        }
        setTimeout(type, 100); // Ajustar la velocidad de escritura
    }

    type();
});
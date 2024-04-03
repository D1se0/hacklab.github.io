document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const textArray = ["Sitio de Hacking Ético", "cd CTF", "Aprende de forma práctica", "nano ctf1.txt"];
    let index = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        const fullText = textArray[index];
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }
        textElement.textContent = currentText;

        if (!isDeleting && currentText === fullText) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            index = (index + 1) % textArray.length; // Move to the next text in the array
            setTimeout(type, 500);
        } else {
            setTimeout(type, 100);
        }
    }

    type();
});

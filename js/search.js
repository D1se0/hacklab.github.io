document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const ctfs = document.querySelectorAll('.ctf');
    const searchButton = document.getElementById('searchButton');
    const searchMessage = document.getElementById('searchMessage'); // Obtener el elemento del mensaje

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        let found = false; // Variable para rastrear si se encontraron resultados

        ctfs.forEach(ctf => {
            const ctfDifficulty = ctf.getAttribute('data-dificultad').toLowerCase();
            const ctfName = ctf.querySelector('h3').textContent.toLowerCase();
            const ctfDescription = ctf.querySelector('p').textContent.toLowerCase();
            const ctfKeywords = ctf.querySelector('meta[name="keywords"]').getAttribute('content').toLowerCase(); // Obtener las palabras clave

            if (ctfDifficulty.includes(searchTerm) || ctfName.includes(searchTerm) || ctfDescription.includes(searchTerm) || ctfKeywords.includes(searchTerm)) {
                ctf.style.display = 'block';
                found = true; // Se encontró al menos una coincidencia
            } else {
                ctf.style.display = 'none';
            }
        });

        // Mostrar o ocultar el mensaje según si se encontraron resultados
        if (found) {
            searchMessage.style.display = 'none';
        } else {
            searchMessage.style.display = 'block';
        }
    });
});

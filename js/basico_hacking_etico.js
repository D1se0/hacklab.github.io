document.addEventListener('DOMContentLoaded', function () {
    const detailsBtns = document.querySelectorAll('.toggle-details-btn');

    detailsBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const details = this.nextElementSibling;

            // Alternar la visibilidad de los detalles
            if (details.style.display === 'block') {
                details.style.display = 'none';
                btn.textContent = 'Mostrar detalles';
            } else {
                details.style.display = 'block';
                btn.textContent = 'Ocultar detalles';
            }
        });
    });
});

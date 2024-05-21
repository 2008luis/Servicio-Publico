// Mostrar y ocultar la ventana emergente al hacer clic en "Ver Detalles" y "Cerrar"
document.addEventListener('DOMContentLoaded', function() {
    const verDetallesBtns = document.querySelectorAll('.ver-detalles-btn');
    const popups = document.querySelectorAll('.popup');

    verDetallesBtns.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            popups[index].style.display = 'block';
        });
    });

    const closeBtns = document.querySelectorAll('.close-btn');

    closeBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            popups[index].style.display = 'none';
        });
    });

    // Ocultar la ventana emergente al hacer clic fuera de ella
    window.addEventListener('click', function(e) {
        popups.forEach(popup => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
});

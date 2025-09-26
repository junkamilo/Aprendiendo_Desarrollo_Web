document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const navbarMenu = document.getElementById('navbar-menu');

    if (menuButton && navbarMenu) {
        menuButton.addEventListener('click', () => {
            // Alterna la clase 'hidden' para mostrar/ocultar el menú
            navbarMenu.classList.toggle('hidden');

            // Actualiza el atributo aria-expanded para accesibilidad
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }
});
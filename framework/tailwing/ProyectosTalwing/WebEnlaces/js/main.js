document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar-sticky');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('hidden');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Funcionalidad extra para los botones de "Copiar"
    const copyButtons = document.querySelectorAll('.btn-copy');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Desactiva todos los botones primero
            copyButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.querySelector('span').textContent = 'Copiar';
            });

            // Activa el botón clickeado
            button.classList.add('active');
            button.querySelector('span').textContent = 'Copiado!';
            
            // Aquí iría la lógica para copiar al portapapeles
            const linkToCopy = button.previousElementSibling.textContent;
            // navigator.clipboard.writeText(linkToCopy);
            console.log('Copiado:', linkToCopy);
        });
    });
});
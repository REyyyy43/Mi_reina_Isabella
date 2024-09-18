let map = L.map('map').setView([9.5, -68.0], 10); // Coordenadas aproximadas del estado Cojedes en Venezuela

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([9.5, -68.0]).addTo(map)
        .bindPopup('Estado Cojedes, Venezuela')
        .openPopup();

        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menu-toggle');
            const menu = document.getElementById('menu');
        
            menuToggle.addEventListener('click', function() {
                menu.classList.toggle('hidden');
            });
        });

 // Remover la clase 'active-link' de todos los enlaces al cargar la página
document.querySelectorAll('nav a').forEach(link => link.classList.remove('active-link'));

// Obtener el pathname de la URL actual (la ruta después del dominio)
const currentPath = window.location.pathname;

// Buscar todos los enlaces de navegación
document.querySelectorAll('nav a').forEach(link => {
    // Comprobar si el href del enlace coincide con la URL actual
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active-link'); // Añadir la clase active-link al enlace que coincide
    }

    // Agregar evento de clic para cambiar la clase cuando se haga clic en un enlace
    link.addEventListener('click', function() {
        // Eliminar la clase 'active-link' de todos los enlaces
        document.querySelectorAll('nav a').forEach(item => item.classList.remove('active-link'));
        // Agregar la clase 'active-link' al enlace seleccionado
        this.classList.add('active-link');
    });
});
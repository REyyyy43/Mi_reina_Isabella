let swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

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
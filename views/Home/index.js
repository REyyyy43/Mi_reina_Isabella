document.addEventListener('DOMContentLoaded', function () {
    const toggleTextButtons = document.querySelectorAll('.toggle-text');

    toggleTextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const textElement = this.parentElement.nextElementSibling;
            const questionElement = this.parentElement;
            textElement.classList.toggle('active');
            questionElement.classList.toggle('bg-darker');
        });
    });
});

AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});
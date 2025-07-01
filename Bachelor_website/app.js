const burger_menu = document.querySelector('#mobile-menu')
const menu_buttons = document.querySelector('.navigation_bar__menu')

burger_menu.addEventListener('click', function() {
    burger_menu.classList.toggle('is-active');
    menu_buttons.classList.toggle('active');
})
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu. addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.getElementById('scroll-left').addEventListener('click', function() {
    document.querySelector('.myths__scroll-container').scrollBy({
        left: -300, // Adjust the scroll amount as needed
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.querySelector('.myths__scroll-container').scrollBy({
        left: 300, // Adjust the scroll amount as needed
        behavior: 'smooth'
    });
});


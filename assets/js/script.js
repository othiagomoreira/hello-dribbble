// Menu mobile
const toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => {
    const menu = document.querySelector('.nav-menu');
    //Verifica se a class show existe se não existir retira e se nao adiciona
    menu.classList.toggle('show');
});
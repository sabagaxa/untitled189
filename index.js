let menu = document.querySelector('.header-div-2');
let navbar = document.querySelector('.header-nav-list');

menu.onclick = () => {
    navbar.classList.toggle('header-nav-list');
    navbar.style.textAlign = 'center';
    navbar.style.listStyle = 'none';
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'column';
    navbar.style.gap = '10px';
    menu.style.display = 'none';
}

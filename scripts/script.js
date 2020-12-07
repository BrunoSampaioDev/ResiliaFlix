const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.btnAbrir');
const btnClose = document.querySelector('.btnClose');

btnMenu.addEventListener('click', function(){
    menu.classList.add('menuOpen');
});

btnClose.addEventListener('click', function(){
    menu.classList.remove('menuOpen');
});

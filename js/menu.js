const iconoMenu = document.querySelector('.icono-menu');
const menu = document.querySelector('ul');
iconoMenu.addEventListener('click', () => {
     if(menu.classList.contains('ul-activo')){
            menu.classList.remove('ul-activo');
     }else{
      menu.classList.add('ul-activo');
     }
});
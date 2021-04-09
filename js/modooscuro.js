const btnMod = document.querySelector('.icono-modooscuro');
btnMod.addEventListener('click', modooscuro);

function modooscuro() {
    let theme = document.getElementById('tema');
  
    if (theme.getAttribute("href") === "css/estilos.css") {
        theme.href = "css/estilosModooscuro.css";
    } else {
      theme.href = "css/estilos.css";
    }
  }
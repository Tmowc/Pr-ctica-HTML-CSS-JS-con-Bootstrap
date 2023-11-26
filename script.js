document.addEventListener('DOMContentLoaded', function() {

    
    /*menu hamburguesa*/
let desplegableTematicas = document.querySelector('#desplegable-tematicas');
let desplegableNetflix = document.querySelector('#desplegable-netflix');
let desplegableDisney = document.querySelector('#desplegable-disney');

let enlaceEstrenos = document.querySelector('#enlace-estrenos');
let portada = document.querySelector('.portada');
let aside = document.querySelector('#aside');
let seccionEstrenos = document.querySelector('.cine');

let formRegistro = document.querySelector('#formulario-registro');
let btnSuscribir = document.querySelector('#btn-suscribir');
let formLogin = document.querySelector('#formulario-login');

desplegableTematicas.addEventListener('mouseleave', ocultarTematicas);
desplegableNetflix.addEventListener('mouseleave', ocultarNetflix);
desplegableDisney.addEventListener('mouseleave', ocultarDisney);




//Grupo de fciones. que ocultan los desplegables al dispararse el evento mouseleave
function ocultarTematicas(event) {
    event.preventDefault();
    desplegableTematicas.classList.remove('show');
}
function ocultarNetflix(event) {
    event.preventDefault();
    desplegableNetflix.classList.remove('show');
}
function ocultarDisney(event) {
    event.preventDefault();
    desplegableDisney.classList.remove('show');
}

enlaceEstrenos.addEventListener('click', mostrarEstrenos);
let visibleEstrenos = false;
function mostrarEstrenos(event) {
    event.preventDefault();
    if (!visibleEstrenos) {
       portada.classList.toggle('oculto');
       seccionEstrenos.classList.remove('oculto');
       seccionEstrenos.style.padding = "20em 0 0 0";
       visibleEstrenos = true;
    }
    
    else{
        portada.classList.remove('oculto');
       seccionEstrenos.classList.add('oculto');
       visibleEstrenos = false;
    }
    
    
}

//botones de login/registro del navbar
btnSuscribir.addEventListener('click', mostrarSuscripcion);
let visibleSuscribir = false;
function mostrarSuscripcion(event) {
    event.preventDefault();
    if (!visibleSuscribir) {
        formRegistro.classList.remove('oculto');
        portada.classList.add('oculto');
        seccionEstrenos.classList.add('oculto');
        aside.classList.add('oculto');
        visibleSuscribir = true;
    }
    else{
        formRegistro.classList.add('oculto');
        portada.classList.remove('oculto');
        seccionEstrenos.classList.remove('oculto');
        aside.classList.remove('oculto');
        visibleSuscribir = false;
    }
    
}



  
});







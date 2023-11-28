document.addEventListener('DOMContentLoaded', function() {
 
    /*menu hamburguesa*/
let desplegableTematicas = document.querySelector('#desplegable-tematicas');
let desplegableNetflix = document.querySelector('#desplegable-netflix');
let desplegableDisney = document.querySelector('#desplegable-disney');


let enlaceEstrenos = document.querySelector('#enlace-estrenos');


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

//ocultando contenedores
function ocultarContenedores() {
    let containerOculto = document.querySelectorAll('.contenedor');
    containerOculto.forEach(function (container) {
          container.style.display = "none"; //asignno la clase d-none a cada elemento
    });
}
let ocultar;
ocultar = ocultarContenedores(); //invoco la fcion. ocultar....

//Mostrar seccion estrenos de cine
enlaceEstrenos.addEventListener('click', mostrarEstrenos);
function mostrarEstrenos() {
     document.getElementById('seccion-estrenos').style.display = "block";
     document.querySelector('.portada').style.display = "none";
     document.querySelector('#formulario-registro').style.display = "none";
     document.getElementById('formulario-login').style.display = "none";
     document.querySelector('#aside').style.display = "block";

}

//Mostrar seccion formulario de inscripcion
btnSuscribir.addEventListener('click', mostrarSuscripcion);
function mostrarSuscripcion() {
    document.querySelector('#formulario-registro').style.display = "block";
    document.getElementById('seccion-estrenos').style.display = "none";
    document.querySelector('.portada').style.display = "none";
    document.querySelector('#aside').style.display = "none";
}

//Mostar seccion formulario de login
document.getElementById('btn-login').addEventListener('click', function () {
    document.getElementById('formulario-login').style.display = "block";
    document.querySelector('#formulario-registro').style.display = "none";
    document.getElementById('seccion-estrenos').style.display = "none";
    document.querySelector('.portada').style.display = "none";
    document.querySelector('#aside').style.display = "none";
});

//Insertando el video del trailer de la película


});







/*menu hamburguesa*/
let desplegableTematicas = document.querySelector('#desplegable-tematicas');
let desplegableNetflix = document.querySelector('#desplegable-netflix');
let desplegableDisney = document.querySelector('#desplegable-disney');

let enlaceEstrenos = document.querySelector('#enlace-estrenos');
let portada = document.querySelector('.portada');
let seccionEstrenos = document.querySelector('.cine');

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

//mostrando seccion estrenos
enlaceEstrenos.addEventListener('click', mostrarEstrenos);
let visibleEstrenos = false;
function mostrarEstrenos(event) {
    event.preventDefault();
    if (!visibleEstrenos) {
       portada.classList.toggle('d-none');
       seccionEstrenos.classList.remove('d-none');
       seccionEstrenos.style.padding = "20em 0 0 0"; 
       visibleEstrenos = true;
    }
    else{
        portada.classList.remove('d-none');
        seccionEstrenos.classList.add('d-none');
        visibleEstrenos = false;
    }
    
    
}

//botones de login/registro del navbar



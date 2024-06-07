document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})
//DOMContentLoaded --cuando el HTML es cargado y procesado, el DOM está completamente construido
// y luego ejecuta la funcion crearGaleria

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')
    // selecciona la clase creada en el html y la almacena en la constante galeria

    for(let i=1; i<=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/thumb/${i}.jpg`;
//en cada ciclo a la constante imagen se le crea una etiqueta de tipo img
//ahora a imagen se busca la ruta de foto que se le asigna 
        imagen.dataset.imagenId = i; // agrega atributo en la etiqueta Li
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        //a la constante lista se le crea la eqtiqueta LI

        lista.appendChild(imagen); // le agrega el hijo
        // a la lista(LI) se le agrega el valor constante imagen
        galeria.appendChild(lista);
        // y a la galeria se le agrega la constante lista(LI), que contieene una IMG

    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId) // pasa a numero el string
    
    const imagen = document.createElement("IMG") // se crea la iamgen seleccionada para verla en grande
    imagen.src = `src/img/grande/${id}.jpg`; // a la etiqueta img se asigna la imagen grande

    // va crear el overlay(background-color mas opaco)cuando seleccione una foto
    const overlay = document.createElement('DIV');  // se crea una etiqueta
    overlay.appendChild(imagen); // al dic creado se le agrega la imagen
    overlay.classList.add('overlay'); // le crea la div la clase overlay


    // boton para cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = "X";
    cerrarImagen.classList.add('btn-cerrar'); /// crea clase para diseñar boton

    // cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function(){
        overlay.remove(); 
    }
    //tambien cuando se presiona fuera de la imagen se cierra
    overlay.onclick = function(){
        overlay.remove()    
    }

    overlay.appendChild(cerrarImagen); // el boton se lo agregamos al div(overlay)


    // Mostrar en el html
    const body = document.querySelector('body') // seleccionamos el body del html
    body.appendChild(overlay); 
    body.classList.add('fijar-body') // crea clase para para no hacer scroll

}


////////////////////////////////////////////////////////////////////////////

/// función que aplica scroll a los enlaces internos 

document.addEventListener('DOMContentLoaded', function(){
    scrollNav(); // función creada para dar scroll hasta uan sección 

    navegacionFija(); // función para que quede la barra de navegacion fija 
});

function navegacionFija(){

    const barra = document.querySelector('.header')

    // Registrar el intersection Observer 
    const observer = new IntersectionObserver( function(entries){
       if (entries[0].isIntersecting){
            barra.classList.remove('fijo');
       } else {
         barra.classList.add('fijo')
       }
    }); // IntersectionObserver es una API que mira si un elemento esta visible en la pantalla cuando hacemos scroll

    // Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a')

    //se recorre enlaces con forEach por que son varios enlances
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({ // scrollIntoView da el salto a hacia la informacion 
                behavior: 'smooth'      // este obejto de configuracion tiene una llave que se llama behavior
            })                             // smooth es un recorrido mas lento
        });
    });
}
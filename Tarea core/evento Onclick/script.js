var botonesLike = document.querySelectorAll('.like');

for (var i = 0; i < botonesLike.length; i++) {
    const boton = botonesLike[i];
    boton.addEventListener('click', function() {
        var spanContador = boton.querySelector('.contador');
        var cantidadLikes = parseInt(spanContador.innerText);
        cantidadLikes = cantidadLikes + 1;
        spanContador.innerText = `${cantidadLikes} me gusta`;

        var tarjetaAnimal = boton.parentElement;
        var nombreAnimal = tarjetaAnimal.querySelector('h2').innerText;

        if (nombreAnimal === "Gato Atigrado") {
            alert("Gato Atigrado was liked");
        }
    });
}

var botonSesion = document.getElementById('boton-iniciar-sesion');

botonSesion.addEventListener('click', function() {
    if (botonSesion.innerText === "Iniciar Sesión") {
        botonSesion.innerText = "Cerrar Sesión";
    } else {
        botonSesion.innerText = "Iniciar Sesión";
    }
});

var botonDefinicion = document.getElementById('boton-definicion');

botonDefinicion.addEventListener('click', function(){
    botonDefinicion.hidden = true

});
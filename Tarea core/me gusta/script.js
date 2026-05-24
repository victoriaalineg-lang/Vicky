var botonesLike = document.querySelectorAll('.boton-like');

for (let i = 0; i < botonesLike.length; i++) {
    
    const boton = botonesLike[i];

    boton.addEventListener('click', function() {
        var spanContador = boton.previousElementSibling;
        var cantidadLikes = parseInt(spanContador.innerText);
        cantidadLikes = cantidadLikes + 1;
        spanContador.innerText = `${cantidadLikes} like(s)`;
    });
}


var botonSesion = document.getElementById("boton-iniciar-sesion");
var botonRentar1 = document.getElementById("button-rentar-1");
var botonRentar2 = document.getElementById("button-rentar-2");
var botonRentar3 = document.getElementById("button-rentar-3");
var botonGenero1 = document.getElementById("buton-genero-1");
var botonGenero2 = document.getElementById("buton-genero-2");
var botonGenero3 = document.getElementById("buton-genero-3");
var botonGenero4 = document.getElementById("buton-genero-4");
var botonGenero5 = document.getElementById("buton-genero-5");


botonSesion.addEventListener("click", function () {
  alert("Inicio de sesión exitoso");
});

botonRentar1.addEventListener("click", function () {
  botonRentar1.style.backgroundColor = "#ff0000";
  botonRentar3.style.color = "#ffffff";
  botonRentar1.style.fontWeight = "bold";
  botonRentar1.textContent = "No Disponible";
});

botonRentar2.addEventListener("click", function () {
  botonRentar2.style.backgroundColor = "#ff0000";
  botonRentar3.style.color = "#ffffff";
  botonRentar2.style.fontWeight = "bold";
  botonRentar2.textContent = "No Disponible";
});

botonRentar3.addEventListener("click", function () {
  botonRentar3.style.backgroundColor = "#ff0000";
  botonRentar3.style.color = "#ffffff";
  botonRentar3.style.fontWeight = "bold";
  botonRentar3.textContent = "No Disponible";
});

botonGenero1.addEventListener("click", function () {
  var contenedorH2 = document.querySelector(".div-libros h2");
  if (contenedorH2) contenedorH2.textContent = botonGenero1.textContent;
});

botonGenero2.addEventListener("click", function () {
  var contenedorH2 = document.querySelector(".div-libros h2");
  if (contenedorH2) contenedorH2.textContent = botonGenero2.textContent;
});

botonGenero3.addEventListener("click", function () {
  var contenedorH2 = document.querySelector(".div-libros h2");
  if (contenedorH2) contenedorH2.textContent = botonGenero3.textContent;
});

botonGenero4.addEventListener("click", function () {
  var contenedorH2 = document.querySelector(".div-libros h2");
  if (contenedorH2) contenedorH2.textContent = botonGenero4.textContent;
});

botonGenero5.addEventListener("click", function () {
  var contenedorH2 = document.querySelector(".div-libros h2");
  if (contenedorH2) contenedorH2.textContent = botonGenero5.textContent;
});
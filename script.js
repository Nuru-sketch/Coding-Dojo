const supported_on_linux = () => {
  alert("this game is supported on linux");
};
const buythis = () => {
  const item = document.getElementById("items");
  item.value++;
};

var posicion = 1;
juegos(posicion);

function cambiarjuego(suma) {
  juegos(posicion += suma);
}
// en suma recibe la suma o resta que se establece en onclick, luego este se suma a la posicon que representa el numero de la posicion en el array
function posiciondot(n) {
    juegos(posicion = n);
  }

function juegos(suma) {
  var imagen = document.getElementsByClassName("destacado");
  var dots = document.getElementsByClassName("dot");

  if (suma > imagen.length) {
    posicion = 1;
  }
  // en esta parte despues de pasar el valor maximo del array osea 2 este vuelve a 1
  if (suma < 1) {
    posicion = imagen.length;
  }
  // en esta parte despues de ir hacia atras del 0 vuelve a la ultima posicion del array
  for (var i = 0; i < imagen.length; i++) {
    imagen[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // es esta parte las demas imagenes desaparecen
  imagen[posicion-1].style.display = "block";
  dots[posicion-1].className += " active";
}
// en esta parte aparece la imagen en la posicion 0 del array

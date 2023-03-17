var elementos, valorChecado, i, foto;
elementos = document.getElementsByName("slider");

function slide() {
  foto = document.getElementById("ifoto");
  valorChecado;
  for (i = 0; i < elementos.length; i++) {
    if (elementos[i].checked) {
      valorChecado = elementos[i].value;
    }
  }
  foto.style.transition = "background-image .5s ease-in-out";
  if (valorChecado == "foto1") {
    foto.style.backgroundImage = "url('img/tlou1.jpg')";
  } else if (valorChecado == "foto2") {
    foto.style.backgroundImage = "url('img/tlou2.jpg')";
  } else if (valorChecado == "foto3") {
    foto.style.backgroundImage = "url('img/tlou3.jpg')";
    foto.style.transition = "background-image .5s ease-in-out";
  } else if (valorChecado == "foto4") {
    foto.style.backgroundImage = "url('img/tlou4.jpg')";
    foto.style.transition = "background-image .5s ease-in-out";
  } else if (valorChecado == "foto5") {
    foto.style.backgroundImage = "url('img/tlou5.jpg')";
    foto.style.transition = "background-image .5s ease-in-out";
  } else if (valorChecado == "foto6") {
    foto.style.backgroundImage = "url('img/tlou6.jpg')";
  }
}

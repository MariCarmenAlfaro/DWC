window.onload = function () {
  // debugger
  let nodoDiv = document.getElementById('info');
  let nodoLink = document.getElementsByTagName("a");
  let nodoP1 = document.createElement("p");
  let contador = 0;
  let contador1 = 0;
  for (let i = 0; i < nodoLink.length; i++) {
    if (nodoLink[i].href == "http://prueba/") {
      contador++;
    }
    if (nodoLink) {
      contador1++;
    }
  }
    nodoP1.innerHTML =
      "1.Numero de enlaces que hay en la página: " +
      nodoLink.length;

    "<br>2.Numero de parrafos que hay en la página: " +
      nodoP1.length +
      "<br>3.El penultimo enlace apunta a :" + nodoLink[nodoLink.length - 2] +
      "<br>4.Último enlace apunta a :" + nodoLink[nodoLink.length - 1] +

      "<br>5. " + contador + " enlaces apuntan a: http://prueba";
    "<br>6. Número total de enlaces " + contador1;

  };

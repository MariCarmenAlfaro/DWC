let tablaPaises = document.getElementById("paises");
let paisesDatos = document.getElementById("deslegableIniciales");

window.onload = function () {
  

  let iniciales = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for (let i = 0; i < iniciales.length; i++) {
    let listaIniciales = document.createElement("option");
    listaIniciales.innerHTML = iniciales[i];
    listaIniciales.value = iniciales[i];
    paisesDatos.appendChild(listaIniciales);
  }
  

  
};

function buscarPaises() {
  paisesDatos.addEventListener("change", function () {});

  if (paisesDatos.length == 0) {
    tablaPaises.innerHTML = "";
    return;
  }
  let xmlhttp;

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onload = function () {
    tablaPaises.innerHTML = this.responseText;
  };

  xmlhttp.open("GET", "datosPaises.php?valores=" + paisesDatos.value);
  xmlhttp.send();
}

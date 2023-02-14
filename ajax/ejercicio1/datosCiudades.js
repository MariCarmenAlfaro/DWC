let ciudadesDatos = document.getElementById("ciudades");
function datosCiudades(city) {
  if (city.length == 0) {
    ciudadesDatos.innerHTML = "";
    return;
  }
  let xmlhttp;

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onload = function () {
    ciudadesDatos.innerHTML = this.responseText+', ';
  };

  xmlhttp.open("GET", "datosCiudades.php?valores=" + city);
  xmlhttp.send();
}



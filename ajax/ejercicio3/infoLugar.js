let paisesDatos = document.getElementById("selectPais");
window.onload = function () {
  
      
};

function buscarPaises() {
  //paisesDatos.addEventListener("change", function () {});

  if (paisesDatos.length == 0) {
    paisesDatos.innerHTML = "";
    return;
  }
  let xmlhttp;

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onload = function () {
    paisesDatos.innerHTML = this.responseText;
    paisesDatos.value= this.responseText;
  };
console.log(this.responseText);
  xmlhttp.open("GET", "infoLugarPais.php?valores=" + paisesDatos.value);
  xmlhttp.send();
}
console.log(paisesDatos);
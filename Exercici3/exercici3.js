let texto = prompt("Dime el texto que deseas");
let numeroTxt;
let numeroLista;
datos();
function datos() {
  numeroTxt = prompt("Numero que desees que esté");
  numeroLista = parseInt(numeroTxt);
}

debugger;
if (numeroLista <= 1 || numeroLista >= 10) {
  alert("El número debe ser entre 1 y 10");
  datos();
}
debugger;


let olLista = document.getElementsByTagName("ol")[0];
let lista = document.getElementsByTagName("li")[numeroTxt -1];
let listadoNuevo = document.createElement("li");

listadoNuevo.innerHTML = texto;

olLista.insertBefore(listadoNuevo, lista);

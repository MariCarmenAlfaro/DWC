let texto = prompt('Dime el texto que deseas');
let numeroTxt=prompt('Numero que desees que esté');

if(parseInt( numeroTxt)<1 &&parseInt( numeroTxt)>10){
    alert("El número debe ser entre 1 y 10");
}
debugger
let lista = document.getElementsByTagName('ol');
let textoNuevo=document.createElement('li');
textoNuevo.innerHTML=texto;

console.log(textoNuevo);


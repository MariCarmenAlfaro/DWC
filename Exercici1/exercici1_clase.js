document.addEventListener("DOMContentLoaded", function (event) {
  // debugger
  let objeto_a = document.getElementsByTagName("a");
  let objeto_p = document.getElementsByTagName("p");
    let contador=0;
    for (let i = 0; i < objeto_a.length; i++) {
      if(objeto_a[i].href=="http://prueba" ||objeto_a[i].href=="http://prueba/"){
        contador++;
      }
    };
document.getElementById("info").innerHTML=
    "Numero de enlaces que hay en la página: " +
    objeto_a.length +
    "<br>Numero de parrafos que hay en la página: " +
    objeto_p.length+
    "<br>El penultimo enlace apunta a :"+objeto_a[objeto_a.length-2]+
    "<br>Último enlace apunta a :"+objeto_a[objeto_a.length-1]+
  
    "<br>"+contador+" enlaces apuntan a: http://prueba";
    
    
});

const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);

//console.log(registroPacientes);
let arrayPunto=new Array();
let arrayFlecha=new Array();
let claves;
let contador;
for ( claves of registroPacientes.keys()) {
   //console.log(claves);
 //  console.log("DNI: "+claves);
}
for (let valores of registroPacientes.values()) {
    contador++;
    console.log("=========================")
    console.log("PACIENTE: ")
    console.log("DNI: "+claves);
    //console.log(valores);
    arrayPunto= valores.split(". ");
    console.log("Nombre: "+arrayPunto[0]);
   
    //console.log(valores);
    arrayFlecha= arrayPunto[1].split(" -> ");
    //console.log("flecha");
    console.log("Codigo postal: "+arrayFlecha[0]);
    console.log("Calle: "+arrayFlecha[1]);
 }


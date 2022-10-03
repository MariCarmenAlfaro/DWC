let maxFilas=prompt('¿Cuantas filas quieres?');
let maxColumnas=prompt('¿Cuantas colunas quieres?');
let numMinas= prompt('¿Qué numero de minas deseas?')


//Creamos el tablero en HTML
document.write('<table>')


for (let i = 0; i < maxFilas; i++) {
    document.write('<tr>')

    for (let i =0; i< maxColumnas; i++){
        document.write('<td></td>')
    }
    
    document.write('<tr>')
    
}

document.write('<table>')


//Array bidimensional para guardar las minas

let arrayTablero=[];
for (let mina = 0; mina < numMinas; mina++) {
    posFila= Math.floor(Math.random()*maxFilas);
    console.log(posFila)
   // arrayTablero[posFila][posColumna]='MINA';
    
}


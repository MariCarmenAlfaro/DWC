let maxFilas = prompt('¿Cuantas filas quieres?');
let maxColumnas = prompt('¿Cuantas colunas quieres?');
let numMinas = prompt('¿Qué numero de minas deseas?')


//Creamos el tablero en HTML
document.write('<table>')


for (let i = 0; i < maxFilas; i++) {
    document.write('<tr>')

    for (let i = 0; i < maxColumnas; i++) {
        document.write('<td></td>')
    }

    document.write('<tr>')

}

document.write('<table>')


//Array bidimensional para guardar las minas

let arrayTablero = [];
let contadorMinas = 0;
let posFila;
let posColumna;

for (let fila = 0; fila < maxFilas; fila++) {
    arrayTablero[fila] = [];

    for (let columna = 0; columna < maxColumnas; columna++) {
        arrayTablero[fila][columna] = '';

    }
}
//sacamos aleatoriamente las posiciones
while (contadorMinas < numMinas) {
    posFila = Math.floor(Math.random() * maxFilas);
    posColumna = Math.floor(Math.random() * maxColumnas);

    if (arrayTablero[posFila][posColumna] != 'MINA') {
        arrayTablero[posFila][posColumna] = 'MINA';
        contadorMinas++;
    }
};

//Miramos de asignar los numeros alrededor de las posiciones de las minas
let fila = 2;
let columna = 3;
let numMinasAlrededor = 0;
debugger
//recorremos fila y coluna par ver si hay minas
for (let fila = 0; fila < maxFilas; fila++) {
    for (let columna = 0; columna < maxColumnas; columna++) {
        numMinasAlrededor = 0;
        //si NO hay minas entonces 
        if (arrayTablero[fila][columna] != 'MINA'){
            //la posiciones de la fila y la columna empieza 1- hasta 1+, osea al rededor de cada posicion
            for (let cFila = fila - 1; cFila < fila + 1; cFila++) {
                for (let cColumna = columna - 1; cColumna < columna + 1; cColumna++) {
                    //pues si dicha posicion es mayor= 0 y es menor que su maximo(que hemos indicado al principio), si se cumple todo eso entonces
                    if ((cFila >= 0 && cFila < maxFilas) && (cColumna >= 0 && cColumna < maxColumnas)) {
                        //pon en esa posicion una mina
                        if (arrayTablero[cFila][cColumna] == 'MINA') {
                            //añade al contador que ahi hay una mina
                            numMinasAlrededor++;
                        }
                    } 
                }
            }
            arrayTablero[fila][columna] = numMinasAlrededor;
        }
    

arrayTablero[fila][columna] = numMinasAlrededor;
console.log(arrayTablero);
    }
}
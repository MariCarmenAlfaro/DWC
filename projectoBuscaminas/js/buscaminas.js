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
while (contadorMinas < numMinas) {
    posFila = Math.floor(Math.random() * maxFilas);
    posColumna = Math.floor(Math.random() * maxColumnas);

    if (arrayTablero[posFila][posColumna] != 'MINA') {
        arrayTablero[posFila][posColumna] = 'MINA';
        contadorMinas++;
    }
};

let fila = 2;
let columna = 1;
let numMinasAlrededor = 0;
for (let cfila = fila - 1; cfila <= fila + 1; fila++) {
    for (let cColumna = columna - 1; cColumna < columna - 1; cColumna++) {
        if (cfila >=0 || cColumna>=0 || cfila<maxFilas ||cColumna<maxColumnas) {
            if (arrayTablero[cfila][cColumna] == 'MINA') {
                numMinasAlrededor++;
            }
        }



    }
}
arrayTablero[fila][columna]=numMinasAlrededor;
console.log(arrayTablero);
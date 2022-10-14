let maxFilas = prompt('¿Cuantas filas quieres?');
let maxColumnas = prompt('¿Cuantas columnas quieres?');
let numMinas = prompt('¿Qué numero de minas deseas?')

//Array bidimensional para guardar las minas
let arrayTablero = [];


function crearTablero(maxFilas, maxColumnas) {
    for (let fila = 0; fila < maxFilas; fila++) {
        arrayTablero[fila] = [];

        for (let columna = 0; columna < maxColumnas; columna++) {
            arrayTablero[fila][columna] = '';

        }
    }
}
let posFila;
let posColumna;
//sacamos aleatoriamente las posiciones
function sacarMinasAleatorias(numMinas, posFila, posColumna) {
    let contadorMinas = 0;
   
    while (contadorMinas < numMinas) {
        posFila = Math.floor(Math.random() * maxFilas);
        posColumna = Math.floor(Math.random() * maxColumnas);

        if (arrayTablero[posFila][posColumna] != 'MINA') {
            arrayTablero[posFila][posColumna] = 'MINA';
            contadorMinas++;
        }
    };
}

//Miramos de asignar los numeros alrededor de las posiciones de las minas

//debugger
function comprobarMinasyContarlas(maxColumnas, maxFilas) {
    let numMinasAlrededor = 0;
    //recorremos fila y coluna par ver si hay minas
    for (let fila = 0; fila < maxFilas; fila++) {
        for (let columna = 0; columna < maxColumnas; columna++) {
            numMinasAlrededor = 0;
            //si NO hay minas entonces 
            if (arrayTablero[fila][columna] != 'MINA') {

                //la posiciones de la fila y la columna empieza 1- hasta 1+, osea al rededor de cada posicion
                for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                    if (cFila >= 0 && cFila < maxFilas) {

                        for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                            //pues si dicha posicion es mayor= 0 y es menor que su maximo(que hemos indicado al principio), si se cumple todo eso entonces
                            if (cColumna >= 0 && cColumna < maxColumnas && arrayTablero[cFila][cColumna] == 'MINA') {
                                //añade al contador que ahi hay una mina
                                //debugger
                                numMinasAlrededor++;

                            }
                        }

                    }
                    arrayTablero[fila][columna] = numMinasAlrededor;
                }

            }

        }

    }
}
function pintarTablero(arrayTablero, maxFilas, maxColumnas) {
    //Creamos el tablero en HTML

    document.write('<table>')


    for (let i = 0; i < maxFilas; i++) {
        document.write('<tr>')

        for (let j = 0; j < maxColumnas; j++) {
            document.write('<td>' + arrayTablero[i][j] + '</td>')
        }

        document.write('<tr>')

    }

    document.write('<table>')
}
crearTablero(maxFilas, maxColumnas);
sacarMinasAleatorias(numMinas, posFila, posColumna);
comprobarMinasyContarlas(maxColumnas, maxFilas);
pintarTablero(arrayTablero, maxFilas, maxColumnas);
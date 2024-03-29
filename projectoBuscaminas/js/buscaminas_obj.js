class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();

    }
    //const tableroBuscaminas = new Tablero(3,5);
    // console.log(tableroBuscaminas);

    crearTablero() {
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }

    }
    //const buscaminas=new Tablero(3,4);
    //buscaminas.crearTablero();
    //console.log(buscaminas.arrayTablero);
    pintarTablero() {
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write('<td>' + this.arrayTablero[i][j] + '</td>');
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }

    pintarTableroDOM() {
        // Creamos el tablero en DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                columna.id = `f${i}_c${j}`;
                columna.dataset.fila = i;
                columna.dataset.columna = j;
                fila.appendChild(columna);
            }
        }

        document.body.appendChild(tabla);
    }


    /*Para los metodos 
    1. Obtener el nodo que produjo el evento
    2. Obtener del nodo que produjo el evento el valor de su atributo data.fila y data.columna
    Poner alert(he marcado la fila "valor" y la columna"valor")Para marcar
    alert(he despejado  " " "" "") para despejar.
    alert() 
    */


    /*1click poner celda en rojo
    2 click celda amarillo
    3 click volver al color original*/
    //const pintarMinas =new Tablero(3,4);
    //Modificar filas/columnas y volver a crear el tablero con las filas/columnas nuevas

    modificarFilas(nuevasFilas) {
        this.filas = nuevasFilas;
        this.crearTablero();
    }
    modificarColumnas(nuevasColumnas) {
        this.columnas = nuevasColumnas;
        this.crearTablero();
    }

}
class Buscaminas extends Tablero {
    constructor(filas, columnas, numMinas) {
        super(filas, columnas);
        this.numMinas = numMinas;
        this.banderas=0;
        this.colocarMinas();
        this.contarMinas();
    }

    colocarMinas() {
        let contadorMinas = 0;
        let posFila;
        let posColumna;


        while (contadorMinas < this.numMinas) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFila][posColumna] != 'MINA') {
                this.arrayTablero[posFila][posColumna] = 'MINA';
                contadorMinas++;
            };
        };

        // let buscaminas1=new Buscaminas(5,5,5);

        //console.log(buscaminas1.arrayTablero);
    }
    contarMinas() {
        let numMinasAlrededor;

        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                numMinasAlrededor = 0;
                if (this.arrayTablero[fila][columna] != 'MINA') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < this.filas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < this.columnas &&
                                    this.arrayTablero[cFila][cColumna] == 'MINA') {
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        this.arrayTablero[fila][columna] = numMinasAlrededor;
                    }

                }
            }
        }
    }

    pintarTableroDOM() {
        super.pintarTableroDOM();

        let celda;
        this.despejar = this.despejar.bind(this);
        this.marcar = this.marcar.bind(this);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                celda = document.getElementById(`f${i}_c${j}`);

                celda.addEventListener('click', this.despejar);
                celda.addEventListener('contextmenu', this.marcar);
            }
        }
        console.log(this.arrayTablero);
    }


    despejarCelda(celda) {


        let fila = parseInt(celda.dataset.fila);
        let columna = parseInt(celda.dataset.columna);


        celda.removeEventListener('click', this.despejar);
        celda.removeEventListener('contextmenu', this.marcar);

        let contenido = this.arrayTablero[fila][columna];
        let esNumero = contenido > 0 && contenido <= 8;
        let esMina = contenido == 'MINA';
        let esCero = contenido == 0;


        if (esNumero) {
            celda.innerHTML = contenido;

        } else if (esMina) {

            celda.innerHTML = contenido;
            alert("Has perdido...");
            let cuadradito;
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    cuadradito = document.getElementById(`f${i}_c${j}`);
                    if (cuadradito.innerHTML == "🚩" && this.arrayTablero[i][j] != "MINA") {
                        cuadradito.style.backgroundColor = "rgba(255, 49, 49, 0.466)";
                    }
                }
            }


        } else if (esCero) {
            let cuadradito;
            celda.innerHTML = contenido;
            for (let i = fila - 1; i <= fila + 1; i++) {
                if (i >= 0 && i < this.filas) {
                    for (let j = columna - 1; j <= columna + 1; j++) {
                        if (j >= 0 && j < this.columnas) {
                            cuadradito = document.getElementById(`f${i}_c${j}`);

                            if (cuadradito.innerHTML == '') {

                                this.despejarCelda(cuadradito);

                            }
                        }

                    }

                }
            };
        }
    }

    despejar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;


        this.despejarCelda(celda);

    }
    marcar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;


        window.oncontextmenu = function () {
            return false;
        };
        switch (celda.innerHTML) {
            case celda.innerHTML = "":
             
                if(this.banderas !=5){
                    this.banderas++;
                    celda.innerHTML = "🚩";
                }else{
                    celda.innerHTML = "❓";
                }
                break;

            case celda.innerHTML = "🚩":
                celda.innerHTML = "❓";
                this.banderas--;
                break;
            case celda.innerHTML = "❓":
                celda.innerHTML = "";
                break;


        }


    }
    ganar() {

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if(this.arrayTablero[i][j]=='MINA'&& celda.innerHTML=="🚩"){
                    
                }

            }

        }
    }
}

window.onload = function () {
    let buscaminas1 = new Buscaminas(5, 5, 5);
    buscaminas1.pintarTableroDOM();
}
class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
        this.pintarTablero();
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
class Buscaminas extends Tablero{
    constructor(filas, columnas, numMinas){
        super(filas,columnas);
        this.numMinas=numMinas;
        this.colocarMinas();
        this.contarMinas();
    }

    colocarMinas(){
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
    contarMinas(){
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

}
let buscaminas2 = new Buscaminas(5,5,5);


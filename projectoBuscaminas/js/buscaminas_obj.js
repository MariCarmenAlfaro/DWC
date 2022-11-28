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

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                celda = document.getElementById(`f${i}_c${j}`);

                celda.addEventListener('click', this.despejar.bind(this));
                celda.addEventListener('contextmenu', this.marcar);
            }
        }
      console.log(this.arrayTablero);  
    }

    despejar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;
        let fila = celda.dataset.fila;
        let columna = celda.dataset.columna;
        
           let contenido  = this.arrayTablero[fila][columna];
           
           if(contenido>=0 || contenido <=8){
            celda.innerHTML=contenido;
           }else if(contenido=='MINA'){
            celda.innerHTML=contenido;
            alert("Has perdido...");
            let cuadradito;
            for (let i = 0; i < this.filas; i++) {

                for (let j = 0; j < this.columnas; j++) {
                    cuadradito=document.getElementById(`f${i}_c${j}`);
                    if(cuadradito.innerHTML=="🚩"&& this.arrayTablero[i][j]!="MINA"){
                        cuadradito.style.backgroundColor="rgba(255, 49, 49, 0.466)";
                    }
                }
            }
           

           }
           
    }
        marcar() {
            //let evento = elEvento || window.event;
            window.oncontextmenu = function () {
                return false;
            };
            switch (this.innerHTML) {
                case this.innerHTML = "":
                    this.innerHTML = "🚩";
                    break;

                case this.innerHTML = "🚩":
                    this.innerHTML = "❓";
                    break;
                case this.innerHTML = "❓":
                    this.innerHTML = "";
                    break;


            }

        }
    }

window.onload = function () {
    let buscaminas1 = new Buscaminas(5, 5, 5);
    buscaminas1.pintarTableroDOM();
}
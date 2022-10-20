class Tablero {
     filasUsuario = "";
     columnasUsuario ="";
    constructor() {

        this.saberColumnasyFilas();
        this.crearTablero();5
    
        this.pintarTablero();
    }

    saberColumnasyFilas() {
        debugger
        this.filasUsuario = prompt('¿Cuántas filas quieres?');
        this.columnasUsuario = prompt('¿Cuántas columnas quieres?');
        
    }
   
    //const tableroBuscaminas = new Tablero(3,5);
    // console.log(tableroBuscaminas);
   

    crearTablero() {
        console.log(this.filasUsuario)
        console.log(this.columnasUsuario)

        this.arrayTablero = [];

        for (let fila = 0; fila < this.filasUsuario; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnasUsuario; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }
    pintarTablero() {
        document.write('<table>');

        for (let i = 0; i < this.filasUsuario; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnasUsuario; j++) {
                document.write('<td>' + this.arrayTablero[i][j] + '</td>');
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }
}
/*class JuegoMemoria extends Tablero() {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.saberColumnasyFilas();
        this.crearTablero();
        this.pintarTablero();
    }
}*/

const tableroNuevo = new Tablero();

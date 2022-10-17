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
    

}
const pintarMinas =new Tablero(3,4);





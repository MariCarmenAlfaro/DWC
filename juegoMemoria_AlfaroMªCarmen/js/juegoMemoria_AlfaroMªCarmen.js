
class Tablero {
    //Definimos variables globales para usar en todo el código.
    filasUsuario = "";
    columnasUsuario = "";
    constructor() {

        this.saberColumnasyFilas();
        this.calcularSiEsPar();
        this.crearTablero();

    }

    saberColumnasyFilas() {
        alert("¡VAMOS A JUGAR!");
        //Método para preguntar al usuario las filas y columnas que desee para formar el tablero
        this.filasUsuario = parseInt(prompt('¿Cuántas filas quieres?'));
        this.columnasUsuario = parseInt(prompt('¿Cuántas columnas quieres?'));

    }

    calcularSiEsPar() {
        //Con éstemétodo comprobamos si los valores que nos ha dado dan un tablero par, si no le avisamos de que no lo es y volvemos a preguntar.
        let impar = true;
        while (impar) {
            if ((this.filasUsuario * this.columnasUsuario) % 2 == 0) {
                impar = false;
            } else {
                alert("El tablero debe ser par.")
                this.saberColumnasyFilas();
            }
        }

    }
    crearTablero() {

        //Creamos el tablero
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filasUsuario; fila++) {
            this.arrayTablero[fila] = [];
            for (let columna = 0; columna < this.columnasUsuario; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    pintarTablero() {

        //Mostramos el tablero ya formado
        document.write('<table>');

        for (let i = 0; i < this.filasUsuario; i++) {
            document.write('<tr>');
            for (let j = 0; j < this.columnasUsuario; j++) {

                document.write(`<td> <img class="imagen" src="${this.arrayTablero[i][j]}" > </td>`);
            }
            document.write('</tr>');

        } document.write('</table>');
    }
}


class JuegoMemoria extends Tablero {
    //Variable global para poder usar en varios métodos
    arrayImgsAleatorias = [];
    constructor() {
        super();
        this.colocarImagenes();
        this.pintarTablero();

    }
    //Método para recibir las imágenes, crear su pareja, y dar una posición desordenada pero sin que se repita.
    colocarImagenes() {
        
        let imagenesSeleccionadasAnimales = 0;
        let tamanyoTablero = this.filasUsuario * this.columnasUsuario;
        let arrayImagenes = ['imgs/caballo.jpg', 'imgs/cerdo.jpg', 'imgs/elefante.jpg', 'imgs/erizo.jpg', 'imgs/gato.jpg', 'imgs/leon.jpg', 'imgs/panda.jpg', 'imgs/perro.jpeg', 'imgs/pollito.jpg', 'imgs/vaca.jpg'];
        let casilla = 0;
        //Bucle para desordenar todas las imagenes y que así nunca se escojan las mismas.
        for (let i = 0; i < tamanyoTablero; i++) {
            arrayImagenes = arrayImagenes.sort(function () { return Math.random() - 0.5 });

        }
        //Con el bucle creamos un nuevo array con las parejas necesarias para el tamaño definido de tablero
        while (this.arrayImgsAleatorias.length < tamanyoTablero) {
            this.arrayImgsAleatorias.push(arrayImagenes[imagenesSeleccionadasAnimales]);
            this.arrayImgsAleatorias.push(arrayImagenes[imagenesSeleccionadasAnimales]);
            imagenesSeleccionadasAnimales++
            if (arrayImagenes.length == imagenesSeleccionadasAnimales) {
                imagenesSeleccionadasAnimales = 0;
            }
        }
        //Desordenamos el array para que salgan en diferentes posiciones.
        for (let i = 0; i < tamanyoTablero; i++) {
            this.arrayImgsAleatorias = this.arrayImgsAleatorias.sort(function () { return Math.random() - 0.5 });

        }

        //Metemos el array de las imagenes tal y como queremos y lo añadimos a la tabla para sacar por pantalla.

        for (let i = 0; i < this.filasUsuario; i++) {
            for (let j = 0; j < this.columnasUsuario; j++) {

                this.arrayTablero[i][j] = this.arrayImgsAleatorias[casilla];
                casilla++;
            }
        }
    }
}
//Creamos el objeto
let tableroNuevo = new JuegoMemoria();



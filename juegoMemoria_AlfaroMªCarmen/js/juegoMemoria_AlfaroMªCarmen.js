class Tablero {
    filasUsuario = "";
    columnasUsuario = "";
    constructor() {

        this.saberColumnasyFilas();
        this.calcularSiEsPar();
        this.crearTablero();

        this.pintarTablero();
    }



    saberColumnasyFilas() {

        this.filasUsuario = parseInt(prompt('¿Cuántas filas quieres?'));
        this.columnasUsuario = parseInt(prompt('¿Cuántas columnas quieres?'));

    }

    //const tableroBuscaminas = new Tablero(3,5);
    // console.log(tableroBuscaminas);
    calcularSiEsPar() {

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

class JuegoMemoria extends Tablero {
    constructor() {
        super();
        this.colocarImagenes();
        this.pintarImgs();
    }
    colocarImagenes() {
        let imagenesSeleccionadasAnimales = 0;
        let tamanyoTablero = this.filasUsuario * this.columnasUsuario;
        let arrayImagenes = ['imgs/caballo.jpg', 'imgs/cerdo.jpg', 'imgs/elefante.jpg', 'imgs/erizo.jpg', 'imgs/gato.jpg', 'imgs/leon.jpg', 'imgs/panda.jpg', 'imgs/perro.jpeg', 'imgs/pollito.jpg', 'imgs/vaca.jpg'];


        let arrayImgsAleatorias = [];
        debugger
        while  (arrayImgsAleatorias.length < tamanyoTablero) {
         arrayImgsAleatorias.push(arrayImagenes[imagenesSeleccionadasAnimales]);
         arrayImgsAleatorias.push(arrayImagenes[imagenesSeleccionadasAnimales]);
            imagenesSeleccionadasAnimales++
            if (arrayImagenes.length == imagenesSeleccionadasAnimales) {
                imagenesSeleccionadasAnimales = 0
            }

            console.log (arrayImgsAleatorias.length);
        }
        // console.log arrayImgsAleatorias)

        for (let i = 0; i < tamanyoTablero; i++) {
         arrayImgsAleatorias = arrayImgsAleatorias.sort(function () { return Math.random() - 0.5 });

        }

        console.log (arrayImgsAleatorias);


    }
    pintarImgs() {
        for (let i = 0; i <this.filasUsuario; i++) {
            for (let j = 0; j < this.columnasUsuario; j++) {
                
                this.arrayTablero= this.arrayImgsAleatorias[i][j];
            }
          
            
        }
        console.log(this.arrayTablero);
       
     
    }
}

const tableroNuevo = new JuegoMemoria();





class Tablero {
    //Definimos variables globales para usar en todo el código.
    filasUsuario = "";
    columnasUsuario = "";

    constructor() {

        this.saberColumnasyFilas();
        this.calcularSiEsPar();
      //  this.crearTablero();
       // this.pintarTablero();
    }



    saberColumnasyFilas() {
        //Método para preguntar al usuario las filas y columnas que desee para formar el tablero
        this.filasUsuario = parseInt(prompt('¿Cuántas filas quieres?'));
        this.columnasUsuario = parseInt(prompt('¿Cuántas columnas quieres?'));

    }

    //const tableroBuscaminas = new Tablero(3,5);
    // console.log(tableroBuscaminas);
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
/*
    crearTablero() {
        //Creamos el tablero
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filasUsuario; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnasUsuario; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }*/
    /*
    pintarTablero() {
        //Mostramos el tablero ya formado
        document.write('<table>');

        for (let i = 0; i < this.filasUsuario; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnasUsuario; j++) {
               
                document.write('<td> <img src="' + this.urlFoto + '" alt="alternatetext"> </td>');
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }*/
}

class JuegoMemoria extends Tablero {
    //Variable global para poder usar en varios métodos
    arrayImgsAleatorias = [];
    constructor() {
        super();
        this.colocarImagenes();
       // this.pintarImgs();
        this.crearTablero();
        this.pintarTablero();
    }
    colocarImagenes() {
        //Método para recibir las imágenes, crear su pareja, y dar una posición desordenada pero sin que se repita.
        let imagenesSeleccionadasAnimales = 0;
        let tamanyoTablero = this.filasUsuario * this.columnasUsuario;

        let arrayImagenes = ['imgs/caballo.jpg', 'imgs/cerdo.jpg', 'imgs/elefante.jpg', 'imgs/erizo.jpg', 'imgs/gato.jpg', 'imgs/leon.jpg', 'imgs/panda.jpg', 'imgs/perro.jpeg', 'imgs/pollito.jpg', 'imgs/vaca.jpg'];
    
        
        //Con el bucle creamos un nuevo arrray con las parejas necesarias para el tamaño definido de tablero
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

         console.log (this.arrayImgsAleatorias);


    }
/*
    pintarImgs() {
        //Metemos el array de las imagenes taly como queremos y lo añadimos a la tabla para sacar por pantalla.
        debugger
        for (let i = 0; i < this.filasUsuario; i++) {
            for (let j = 0; j < this.columnasUsuario; j++) {
                this.arrayTablero[i][j]=this.arrayImgsAleatorias[i][j];

                
        }
        
        


    }*/
    crearTablero() {
        //Creamos el tablero
        this.arrayTablero = [];
        let cuadrado = 0;

        debugger
        for (let fila = 0; fila < this.filasUsuario; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnasUsuario; columna++) {
                this.arrayTablero[fila][columna] = this.arrayImgsAleatorias[cuadrado];
                cuadrado ++
            }
        }
    }
    pintarTablero() {
        debugger
        //Mostramos el tablero ya formado
        document.write('<table>');
        for (let indiceFilas = 0; indiceFilas < this.arrayTablero.length; indiceFilas++) {
            document.write('<tr>');
           
            for (let indiceColumna = 0; indiceColumna < this.arrayTablero[indiceFilas].length; indiceColumna++) {
                
                document.write('<td> <img src="' + this.arrayTablero[indiceFilas][indiceColumna] + '" alt="Imagen"> </td>');
            }
            document.write('</tr>');
        }
/*
        for (let i = 0; i < this.filasUsuario; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnasUsuario; j++) {
               
                document.write('<td> <img src="' + this.arrayImgsAleatoria[i] + '" alt="alternatetext"> </td>');
            }

            document.write('</tr>');
        }*/
        document.write('</table>');
    }
   // console.log(this.arrayTablero);
}

//Creamos el objeto
const tableroNuevo = new JuegoMemoria();



//Creamos un objeto Tablero para definir la estructura como tal.
class Tablero {
    //Definimos variables globales para usar en todo el código.
    filasUsuario = "";
    columnasUsuario = "";
    constructor() {
        this.saberColumnasyFilas();
        this.calcularSiEsPar();
        this.crearTablero();
    }

    //Método para preguntar al usuario las filas y columnas que desee para formar el tablero
    saberColumnasyFilas() {
        alert("¡VAMOS A JUGAR!");
        this.filasUsuario = parseInt(prompt('¿Cuántas filas quieres?'));
        this.columnasUsuario = parseInt(prompt('¿Cuántas columnas quieres?'));
    }

    //Con éste método comprobamos si los valores que nos ha dado dan un tablero par, si no le avisamos de que no lo es y volvemos a preguntar.
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

    //Creamos el tablero
    crearTablero() {
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filasUsuario; fila++) {
            this.arrayTablero[fila] = [];
            for (let columna = 0; columna < this.columnasUsuario; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    //Mostramos el tablero ya formado
    pintarTablero() {
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

//Creamos el objeto JuegoMemoria para formar todos los valores necesarios y meterlos en nuestro Tablero.
class JuegoMemoria extends Tablero {
    //Variable global para poder usar en varios métodos
    arrayImgsAleatorias = [];
    tamanyoTablero = this.filasUsuario * this.columnasUsuario;
    constructor() {
        super();
        this.hacerParejas();
        this.colocarImagenes();
        this.pintarTablero();
    }
    
    hacerParejas() {

        let imagenesSeleccionadasAnimales = 0;
        let arrayImagenes = ['imgs/caballo.jpg', 'imgs/cerdo.jpg', 'imgs/elefante.jpg', 'imgs/erizo.jpg', 'imgs/gato.jpg', 'imgs/leon.jpg', 'imgs/panda.jpg', 'imgs/perro.jpeg', 'imgs/pollito.jpg', 'imgs/vaca.jpg'];

        //Llamamos al metodo desordenarArrays para que cada primera posicion sea diferente siempre.
        arrayImagenes = this.desordenarArrays(arrayImagenes);

        //Con el bucle, creamos un nuevo array metiendo parejas necesarias para el tamaño definido de tablero
        while (this.arrayImgsAleatorias.length < this.tamanyoTablero) {
            this.arrayImgsAleatorias.push(arrayImagenes[imagenesSeleccionadasAnimales]);
            this.arrayImgsAleatorias.push(arrayImagenes[imagenesSeleccionadasAnimales]);
            imagenesSeleccionadasAnimales++
            if (arrayImagenes.length == imagenesSeleccionadasAnimales) {
                imagenesSeleccionadasAnimales = 0;
            }
        }
        return this.arrayImgsAleatorias;
    }
    //Metodo para desordenar arrays.
    desordenarArrays(arraysDesordenados) {
        //Desordenamos el array para que se coloquen en diferentes posiciones dentro del tablero.
        for (let i = 0; i < this.tamanyoTablero; i++) {
            arraysDesordenados = arraysDesordenados.sort(function () { return Math.random() - 0.5 });

        }
        return arraysDesordenados;
    }
    //Método para recibir las imágenes ya en pareja, y dar una posición desordenada pero sin que se repita.
    colocarImagenes(arrayParejas) {
        debugger
        arrayParejas = this.hacerParejas();
        arrayParejas=this.desordenarArrays(arrayParejas);
        let casilla = 0;
        //Metemos el array de la manera deseada, en parejas de forma aleatorias, y lo añadimos al tablero para sacar por pantalla.
        for (let i = 0; i < this.filasUsuario; i++) {
            for (let j = 0; j < this.columnasUsuario; j++) {
                this.arrayTablero[i][j] = arrayParejas[casilla];
                casilla++;
            }
        }
    }
}
//Declaramos el objeto para su utilización.
let tableroNuevo = new JuegoMemoria();


//Creamos un objeto Tablero para definir la estructura como tal.
class Tablero {
    //Definimos variables globales para usar en todo el código.
    filasUsuario = "";
    columnasUsuario = "";
    constructor() {
        this.saberColumnasyFilas();
        this.calcularSiEsPar();
        this.crearTablero();
    }

    //Método para preguntar al usuario las filas y columnas que desee para formar el tablero
    saberColumnasyFilas() {
        alert("¡VAMOS A JUGAR!");
        this.filasUsuario = parseInt(prompt('¿Cuántas filas quieres?'));
        this.columnasUsuario = parseInt(prompt('¿Cuántas columnas quieres?'));
    }

    //Con éste método comprobamos si los valores que nos ha dado dan un tablero par, si no le avisamos de que no lo es y volvemos a preguntar.
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

    //Creamos el tablero
    crearTablero() {
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filasUsuario; fila++) {
            this.arrayTablero[fila] = [];
            for (let columna = 0; columna < this.columnasUsuario; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    //Mostramos el tablero ya formado
    pintarTablero() {
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

//Creamos el objeto JuegoMemoria para formar todos los valores necesarios y meterlos en nuestro Tablero.
class JuegoMemoria extends Tablero {
    //Variable global para poder usar en varios métodos
    arrayImgsAleatorias = [];
    tamanyoTablero = this.filasUsuario * this.columnasUsuario;
    constructor() {
        super();
        this.hacerParejas();
        this.colocarImagenes();
        this.pintarTablero();
    }
    
    hacerParejas() {

        let imagenesSeleccionadasAnimales = 0;
        let arrayImagenes = ['imgs/caballo.jpg', 'imgs/cerdo.jpg', 'imgs/elefante.jpg', 'imgs/erizo.jpg', 'imgs/gato.jpg', 'imgs/leon.jpg', 'imgs/panda.jpg', 'imgs/perro.jpeg', 'imgs/pollito.jpg', 'imgs/vaca.jpg'];

        //Llamamos al metodo desordenarArrays para que cada primera posicion sea diferente siempre.
        arrayImagenes = this.desordenarArrays(arrayImagenes);

        //Con el bucle, creamos un nuevo array metiendo parejas necesarias para el tamaño definido de tablero
        while (this.arrayImgsAleatorias.length < this.tamanyoTablero) {
            this.arrayImgsAleatorias.push(arrayImagenes[imagenesSeleccionadasAnimales]);
            this.arrayImgsAleatorias.push(arrayImagenes[imagenesSeleccionadasAnimales]);
            imagenesSeleccionadasAnimales++
            if (arrayImagenes.length == imagenesSeleccionadasAnimales) {
                imagenesSeleccionadasAnimales = 0;
            }
        }
        return this.arrayImgsAleatorias;
    }
    //Metodo para desordenar arrays.
    desordenarArrays(arraysDesordenados) {
        //Desordenamos el array para que se coloquen en diferentes posiciones dentro del tablero.
        for (let i = 0; i < this.tamanyoTablero; i++) {
            arraysDesordenados = arraysDesordenados.sort(function () { return Math.random() - 0.5 });

        }
        return arraysDesordenados;
    }
    //Método para recibir las imágenes ya en pareja, y dar una posición desordenada pero sin que se repita.
    colocarImagenes(arrayParejas) {
        debugger
        arrayParejas = this.hacerParejas();
        arrayParejas=this.desordenarArrays(arrayParejas);
        let casilla = 0;
        //Metemos el array de la manera deseada, en parejas de forma aleatorias, y lo añadimos al tablero para sacar por pantalla.
        for (let i = 0; i < this.filasUsuario; i++) {
            for (let j = 0; j < this.columnasUsuario; j++) {
                this.arrayTablero[i][j] = arrayParejas[casilla];
                casilla++;
            }
        }
    }
}
//Declaramos el objeto para su utilización.
let tableroNuevo = new JuegoMemoria();
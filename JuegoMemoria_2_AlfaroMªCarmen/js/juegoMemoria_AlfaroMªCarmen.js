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
    this.filasUsuario = parseInt(prompt("¿Cuántas filas quieres?"));
    this.columnasUsuario = parseInt(prompt("¿Cuántas columnas quieres?"));
  }

  //Con éste método comprobamos si los valores que nos ha dado dan un tablero par, si no le avisamos de que no lo es y volvemos a preguntar.
  calcularSiEsPar() {
    let impar = true;
    while (impar) {
      if ((this.filasUsuario * this.columnasUsuario) % 2 == 0) {
        impar = false;
      } else {
        alert("El tablero debe ser par.");
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
        this.arrayTablero[fila][columna] = "";
      }
    }
  }

  //Mostramos el tablero ya formado
  pintarTablero() {
    document.write("<table>");
    for (let i = 0; i < this.filasUsuario; i++) {
      document.write("<tr>");
      for (let j = 0; j < this.columnasUsuario; j++) {
        document.write(
          `<td> <img class="imagen" src="${this.arrayTablero[i][j]}" > </td>`
        );
      }
      document.write("</tr>");
    }
    document.write("</table>");
  }
  pintarTableroDOM() {
    let tabla = document.createElement("table");
    let fila;
    let columna;
    let imagen;
    tabla.id = "tabla";

    for (let i = 0; i < this.filasUsuario; i++) {
      fila = document.createElement("tr");
      tabla.appendChild(fila);
      for (let j = 0; j < this.columnasUsuario; j++) {
        columna = document.createElement("td");
        imagen = document.createElement("img");
        imagen.src = this.arrayTablero[i][j];
        imagen.className = "ocult";
        columna.id = `f${i}_c${j}`;
        columna.dataset.fila = i;
        columna.dataset.columna = j;
        fila.appendChild(columna);
        columna.appendChild(imagen);
      }
    }
    document.body.appendChild(tabla);
  }
}

//Creamos el objeto JuegoMemoria para formar todos los valores necesarios y meterlos en nuestro Tablero.
class JuegoMemoria extends Tablero {
  //Variable global para poder usar en varios métodos
  arrayImgsAleatorias = [];
  arrayImagenesDescubiertasFila = [];
  arrayImagenesDescubiertasColumna = [];

  cartasGiradas = 0;
  numAciertos = 0;
  fechaInicio;

  tamanyoTablero = this.filasUsuario * this.columnasUsuario;
  constructor() {
    super();
    this.hacerParejas();
    this.colocarImagenes();
    this.pintarTableroDOM();
  }

  hacerParejas() {
    let imagenesSeleccionadasAnimales = 0;
    let arrayImagenes = [
      "imgs/caballo.jpg",
      "imgs/cerdo.jpg",
      "imgs/elefante.jpg",
      "imgs/erizo.jpg",
      "imgs/gato.jpg",
      "imgs/leon.jpg",
      "imgs/panda.jpg",
      "imgs/perro.jpeg",
      "imgs/pollito.jpg",
      "imgs/vaca.jpg",
    ];

    //Llamamos al metodo desordenarArrays para que cada primera posicion sea diferente siempre.
    arrayImagenes = this.desordenarArrays(arrayImagenes);

    //Con el bucle, creamos un nuevo array metiendo parejas necesarias para el tamaño definido de tablero
    while (this.arrayImgsAleatorias.length < this.tamanyoTablero) {
      this.arrayImgsAleatorias.push(
        arrayImagenes[imagenesSeleccionadasAnimales]
      );
      this.arrayImgsAleatorias.push(
        arrayImagenes[imagenesSeleccionadasAnimales]
      );
      imagenesSeleccionadasAnimales++;
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
      arraysDesordenados = arraysDesordenados.sort(function () {
        return Math.random() - 0.5;
      });
    }
    return arraysDesordenados;
  }
  //Método para recibir las imágenes ya en pareja, y dar una posición desordenada pero sin que se repita.
  colocarImagenes(arrayParejas) {
    arrayParejas = this.hacerParejas();
    arrayParejas = this.desordenarArrays(arrayParejas);
    let casilla = 0;
    //Metemos el array de la manera deseada, en parejas de forma aleatorias, y lo añadimos al tablero para sacar por pantalla.
    for (let i = 0; i < this.filasUsuario; i++) {
      for (let j = 0; j < this.columnasUsuario; j++) {
        this.arrayTablero[i][j] = arrayParejas[casilla];
        casilla++;
      }
    }
  }
  pintarTableroDOM() {
    super.pintarTableroDOM();
    let celda;

    this.descubrir = this.descubrir.bind(this);

    for (let i = 0; i < this.filasUsuario; i++) {
      for (let j = 0; j < this.columnasUsuario; j++) {
        celda = document.getElementById(`f${i}_c${j}`);
        celda.addEventListener("contextmenu", this.descubrir);
      }
    }
    console.log(this.arrayTablero);
    this.fechaInicio = new Date();
  }
  descubrir(elEvento) {
    let evento = elEvento || window.event;
    let celda = evento.currentTarget;

    window.oncontextmenu = function () {
      return false;
    };
    this.descubrirImagen(celda);
  }
  descubrirImagen(celda) {
    // hacer visible la carta

    let fila = parseInt(celda.dataset.fila);
    let columna = parseInt(celda.dataset.columna);
    celda.firstChild.className = "visible";

    // guardar carta y comprobar si es igual
    this.arrayImagenesDescubiertasFila.push(fila);
    this.arrayImagenesDescubiertasColumna.push(columna);
    this.cartasGiradas++;

    //Si tenemos dos cartas giradas comprobar que sean igual, dejarlas giradas y si no son iguales volver a voltear.
    if (this.cartasGiradas == 2) {
      let i = this.arrayImagenesDescubiertasFila[0];
      let j = this.arrayImagenesDescubiertasColumna[0];

      let carta1 = document.getElementById(`f${i}_c${j}`);

      i = this.arrayImagenesDescubiertasFila[1];
      j = this.arrayImagenesDescubiertasColumna[1];

      let carta2 = document.getElementById(`f${i}_c${j}`);

      // console.log(carta1);
      // console.log(carta2);

      if (carta1.firstChild.src == carta2.firstChild.src) {
        // alert("muy bien");
        this.numAciertos++;
        this.arrayImagenesDescubiertasFila = [];
        this.arrayImagenesDescubiertasColumna = [];
        this.cartasGiradas = 0;
      } else {
        let tabla = document.getElementById("tabla");
        tabla.className = "noClickable";
        setTimeout(() => {
          carta1.firstChild.className = "ocult";
          carta2.firstChild.className = "ocult";
          this.arrayImagenesDescubiertasFila = [];
          this.arrayImagenesDescubiertasColumna = [];
          this.cartasGiradas = 0;
          tabla.className = "clickable";
        }, 2000);
      }
    }
    if (this.tamanyoTablero / 2 == this.numAciertos) {
      this.endGame();
    }
  }
  endGame() {
    this.getTimePlay();
    let tabla = document.getElementById("tabla");
    tabla.className = "noClickable";
  }

  getTimePlay() {
    alert(
      "Enhorabuena, has terminado en : " +
        (new Date().getTime() - this.fechaInicio.getTime()) / 1000 +
        " segundos"
    );
  }
}
//Declaramos el objeto para su utilización.
let tableroNuevo = new JuegoMemoria();

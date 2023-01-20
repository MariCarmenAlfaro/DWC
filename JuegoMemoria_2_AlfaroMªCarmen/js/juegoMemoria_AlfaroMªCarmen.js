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
      this.tableroCorrecto();
    }
  }
  //Se comprueba que los datos introducidos son correctos para el funcionamiento correcto del juego.
  tableroCorrecto() {
    if (this.filasUsuario == 0 || this.columnasUsuario == 0) {
      alert("¡No puedes introducir el número 0!");
      this.saberColumnasyFilas();
      this.tableroCorrecto();
    }
    if (
      (this.filasUsuario == 1 && this.columnasUsuario == 2) ||
      (this.filasUsuario == 2 && this.columnasUsuario == 1)
    ) {
      alert("Tu tablero debe tener más de una pareja");
      this.saberColumnasyFilas();
      this.tableroCorrecto();
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
  intentos = 0;
  puntos = 0;
  cartaUsada1 = null;
  cartaUsada2 = null;
  cuerpo = document.getElementById("cuerpo");
  totalPuntos = 0;
  tabla;
  puntuacion = document.getElementById("puntuacion");
  tamanyoTablero = this.filasUsuario * this.columnasUsuario;
  constructor() {
    super();
    this.hacerParejas();
    this.colocarImagenes();
    this.pintarTableroDOM();
  }
//Método donde sea realizan las parejas entre cartas.
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
  //Método que pinta el tablero con los datos y poder añadir los eventos
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
    //Puntos totales al prinipio del juego.
    this.totalPuntos = (this.tamanyoTablero / 2) * 10;
    puntuacion.innerHTML = this.puntos + "/" + this.totalPuntos;

    //Declaración del del evento para reiniciar el juego.
    let resetTable = document.getElementById("reiniciarJuego");
    this.reiniciarJuego = this.reiniciarJuego.bind(this);
    resetTable.addEventListener("click", this.reiniciarJuego);

    //Muestra todas las cartas al iniciar el juego.
    this.tabla = document.getElementById("tabla");
    this.tabla.className = "mostrarTodo";

    //Control del tiempo en la cual aparecen las imagenes y comienzo del contador de la fecha de inicio.
    setTimeout(() => {
      this.tabla.className = "";
      this.fechaInicio = new Date();
    }, 1500);
  }
  //Manejador del evento.
  descubrir(elEvento) {
    let evento = elEvento || window.event;
    let celda = evento.currentTarget;

    window.oncontextmenu = function () {
      return false;
    };
    this.descubrirImagen(celda);
  }
  //Acción que ejecuta el evento.
  descubrirImagen(celda) {
    this.tabla = document.getElementById("tabla");
    if (this.cartasGiradas == 1) {
      this.tabla.className = "noClickable";
    }
    // hacer visible la carta
    let fila = parseInt(celda.dataset.fila);
    let columna = parseInt(celda.dataset.columna);
    celda.firstChild.className = "visible";

    // Guardar la posicion dentro del array
    this.arrayImagenesDescubiertasFila.push(fila);
    this.arrayImagenesDescubiertasColumna.push(columna);
    this.cartasGiradas++;

    //Guardamos la posicion de carta 1 para usarla en un futuro
    let carta1 = document.getElementById(
      `f${this.arrayImagenesDescubiertasFila[0]}_c${this.arrayImagenesDescubiertasColumna[0]}`
    );

    //Miramos si tenemos dos cartas giradas para futuras comprobaciones.
    this.comprobarNumeroDecartasGiradas(carta1);

    //Comprobamos si el juego a terminado o no.
    if (this.tamanyoTablero / 2 == this.numAciertos) {
      this.finJuego();
    }
    //Puntos totales y los que se van obteniendo, actualizandose.
    this.totalPuntos = (this.tamanyoTablero / 2) * 10;
    puntuacion.innerHTML = this.puntos + "/" + this.totalPuntos;
  }

  //Método donde se comprueban si las cartas seleccionadas son una pareja y si lo son,
  //se condiciona a si son iguales entre ellas o no, si lo son se dejan visibles, si no lo son, 
  //se visibilizan con un temporizador y luego se ocultan de nuevo para seguir jugando.
  comprobarNumeroDecartasGiradas(carta1) {
    if (this.cartasGiradas == 2) {
      this.intentos++;
      // Guardamos la carta 2 para usarla en un futuro. Guardamos la carta dentro de este condicional para asegurarnos de que hay dos cartas
      let carta2 = document.getElementById(
        `f${this.arrayImagenesDescubiertasFila[1]}_c${this.arrayImagenesDescubiertasColumna[1]}`
      );

      // comprobar que las dos cartas sean igual, si son iguales las dejamos giradas y si no son iguales volver a voltear.
      if (carta1.firstChild.src == carta2.firstChild.src) {
        //Son cartas iguales
        carta1.removeEventListener("contextmenu", this.descubrir);
        carta2.removeEventListener("contextmenu", this.descubrir);

        this.numAciertos++;
        this.arrayImagenesDescubiertasFila = [];
        this.arrayImagenesDescubiertasColumna = [];
        this.cartasGiradas = 0;
        this.tabla.className = "clickable";

        //Comprobamos si las nuevas cartas coinciden con las anteriores y asignamos puntos correspondientes
        this.comprobacionCartasYAsignacionPuntos(carta1, carta2);
        this.intentos = 0;

      } else {
        //No son cartas iguales
        setTimeout(() => {
          carta1.firstChild.className = "ocult";
          carta2.firstChild.className = "ocult";
          this.arrayImagenesDescubiertasFila = [];
          this.arrayImagenesDescubiertasColumna = [];
          this.cartasGiradas = 0;
          this.tabla.className = "clickable";
        }, 2000);
      }
      this.cartaUsada1 = carta1.id;
      this.cartaUsada2 = carta2.id;
    }
  }
//Método  donde se comprueban si las nuevas cartas seleccionadas son igual a las que habia ya elegido
// y así poder adjudicar los puntos correspondientes en base los intentos que lleve con las mismas cartas.
  comprobacionCartasYAsignacionPuntos(carta1, carta2) {
    //Si son iguales las imagenes seleccionadas nuevamente
    if (carta1.id == this.cartaUsada1 ||
      carta1.id == this.cartaUsada2 ||
      carta2.id == this.cartaUsada1 ||
      carta2.id == this.cartaUsada2) {
      if (this.intentos == 2) {
        this.puntos = this.puntos + 5;
      }
      if (this.intentos == 3) {
        this.puntos = this.puntos + 2.5;
      }
    } else {
      //Ninguna carta coincide 
      if (carta1.id != (this.cartaUsada1 && this.cartaUsada2) &&
        carta2.id != (this.cartaUsada1 && this.cartaUsada2)) {
        this.intentos = 1;
      }

      if (this.intentos == 1) {
        this.puntos = this.puntos + 10;
      }
    }
  }

  //Finaliza el juego y calcula el tiempo que se ha tardado y muestra mensaje con los resultados de tiempototal y puntos obtenidos.
  finJuego() {
    let tiempo = document.getElementById("tiempo");
    tiempo.innerHTML =
      "<p class='ganador'>¡¡¡ENHORABUENA!!!<br> Has terminado la partida en : " +
      parseInt((new Date().getTime() - this.fechaInicio.getTime()) / 1000) +
      " segundo/s. <br> ¡¡Has ganado con " +
      this.puntos +
      " puntos de " +
      this.totalPuntos +
      "!!</p>";
    cuerpo.appendChild(tiempo);
  }

  //Método para reiniciar el juego
  reiniciarJuego() {
    if (confirm("¿Desea reiniciar la partida?")) {
      location.reload();
    }
  }
}

//Declaramos el objeto para su utilización.
let tableroNuevo = new JuegoMemoria();

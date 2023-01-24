//Funcion para validar nombre
function validarNombre() {
  let patron = /^[A-Za-záéíóúÁÉÍÓÚÑñçÇäËÜÖÄëöü]{2,}$/;
  this.className = "";
  if (patron.test(this.value)) {
    this.className = "verde";
  }
}
function validarEmail(){
    let patron = /^.+@.+$/;
    this.className = "";
    if (patron.test(this.value)) {
      this.className = "verde";
    }
}
window.addEventListener("load", function () {
  let nombre = this.document.getElementById("nombre");
  let apellidos = this.document.getElementById("apellido");
  nombre.addEventListener("keyup", validarNombre);
  apellidos.addEventListener("keyup", validarNombre);

  let email = this.document.getElementById("email");
  email.addEventListener("keyup", validarEmail);
});

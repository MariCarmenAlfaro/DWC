/**
 * Función para validar varios patrones
 */
function validarDatos() {
  let patrones = new Map();

  patrones.set("nombre", /^[A-Za-záéíóúüàèiòÁÉÍÓÚÀÈÒÜñÑçÇ]{2,}$/);
  patrones.set("apellidos", /^[A-Za-záéíóúüàèiòÁÉÍÓÚÀÈÒÜñÑçÇ]{2,}$/);
  patrones.set("email", /^.+@.+$/);
  patrones.set("telefonoNacional", /^([89][^09]|[67][0-9])[0-9]{7}$/);
  patrones.set("telefonoPreFijo", /^\(\+[0-9]{1,3}\)\s[0-9]{9}$/);
  patrones.set("codiPostal", /^[0-5][0-9]{4}$/);
  patrones.set(
    "fecha",
    /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$/
  );
  patrones.set("hora", /^([0-1][0-9]|2[0-3])(:[0-5][0-9])$/);

  patrones.set("creditCard",/^4([0-9]{12}|[0-9]{15})
  |5[1-5][0-9]{14}
  |6011[0-9]{12}
  |5[0-9]{15}
  |3[4,7][0-9]{13}
  |30[0-5][0-9]{11}
  |3[6,8][0-9]{12}
  |(2131|1800)[0-9]{11}
  |35[0-9]{14}$/);

  this.className = "";
  if (patrones.get(this.id).test(this.value)) {
    this.className = "verde";
  }
}

// Ejecución de la aplicación
window.addEventListener("load", function () {
  let nombre = document.getElementById("nombre");
  let apellidos = document.getElementById("apellidos");
  let email = document.getElementById("email");

  nombre.addEventListener("keyup", validarDatos);
  apellidos.addEventListener("keyup", validarDatos);
  email.addEventListener("keyup", validarDatos);
});

function verificarTelefonoNacional(){
    let patron=/^[0-9]{9}$/;
}
function verificarTelefonoPreFijo(){
    let patron=/^\(\+[0-9]{2,3}\)\s[0-9]{9}$/;
    

}
function validarNombre() {
    let patron = /^[A-Za-záéíóúÁÉÍÓÚÑñçÇäËÜÖÄëöü]{2,}$/;
    this.className = "";
    if (patron.test(this.value)) {
      this.className = "verde";
    }
  }
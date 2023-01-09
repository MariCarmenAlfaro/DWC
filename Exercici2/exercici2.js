
    function ocultarMostrar(idParrafo,idBoton){
       let boton= document.getElementById(idBoton);
      
       let parrafo= document.getElementById(idParrafo);
       if(boton.textContent==='Ocultar'){
        boton.innerHTML="Mostrar";
        parrafo.className="ocult";
       } else if(boton.textContent==='Mostrar'){
        boton.innerHTML="Ocultar";
        parrafo.className="visible";
       } 
    }

   
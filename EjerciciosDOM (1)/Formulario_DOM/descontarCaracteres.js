document.addEventListener("DOMContentLoaded", function(event) {
    let textarea = document.getElementById('areatexto');
    let nodoParrafo = document.createElement('p');
    nodoParrafo.id = 'parrafoCaracteres'
    let nodoTextoParrafo = document.createTextNode(`Pots escriure ${textarea.maxLength - textarea.value.length} caràcters`)

    nodoParrafo.appendChild(nodoTextoParrafo);
    document.getElementById('areaFormulario').appendChild(nodoParrafo);
});

function descontarCaracteres(textarea){
    let numeroCaracteresInsertados = textarea.value.length;

    return textarea.maxLength - numeroCaracteresInsertados;
}

function insertarNumeroCaracteres(parrafoId, textarea){
    let areatexto = document.getElementById(textarea);
    let parrafo = document.getElementById(parrafoId);
    parrafo.innerHTML = `Pots escriure ${descontarCaracteres(areatexto)} caràcters.`
}
let Numero_um = document.querySelector("#Numero_um");
let Numero_dois = document.querySelector("#Numero_dois");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function somarNumeros(){
    let a = Number(Numero_um.value);
    let b = Number(Numero_dois.value);
    Resultado.innerHTML = a + b;
}

Botao.onclick = function(){
    somarNumeros();
}

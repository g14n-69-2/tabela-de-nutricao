//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Melecas";
var pipipupu = document.querySelector(".titulo");
pipipupu.textContent = "Dr. Pipipupu Nutrição";

//acessar a tag TR -> meleca Paulo
var paciente = document.querySelector(".meleca");

for(var i = 0; i < paciente.length; i++){


    //seleciona o PESO do meleca
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //seleciona a ALTURA do meleca
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o IMC do meleca
    var imc = peso / (altura * altura);

        //variáveis com valor TRUE
        var pesoValido = true;
        var alturaValida = true;

    //condicionais
    if(pesoValido && alturaValida){
     var tdIMC = paciente.querySelector(".info-imc");
     tdIMC.textContent = imc;
    }
    if(peso <= 0 || peso >= 1000){
     pesoValido = false;
     console.log("Peso inválido");
     tdIMC.textContent = "Peso Inválido";
    }
    if(altura <= 0 || altura >= 3.00){
     alturaValida = false;
     console.log("alto demais, seu muco");
     tdAltura.textContent = "Peso Inválido";
    }

}
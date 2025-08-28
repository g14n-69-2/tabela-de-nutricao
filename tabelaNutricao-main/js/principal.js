//muda o nome a partir do seletor de classe
var pacientes = document.querySelector(".subtitulo");
pacientes.textContent = "Meus Melecas";
var pipipupu = document.querySelector(".titulo");
pipipupu.textContent = "Dr. Pipipupu Nutrição";

//acessar a tag TR -> paciente Paulo
var paciente = document.querySelector("#primeiro-meleca");
//seleciona o conteúdo PESO da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//seleciona a altura do meleca
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//calcula o imc do meleca
var imc = peso / (altura * altura);
var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = imc;

if(peso < 0 || peso > 1000){
    alert("Peso inválido");
}
if(altura < 0 || altura > 2.99){
    alert("Altura inválida");
}



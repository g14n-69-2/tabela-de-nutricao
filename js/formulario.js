//Acessa o Botão
var botaoAdicionar = document.querySelector("#adicionar-paciente")
//Executa os Códigos ao Clicar no Botão
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
     //Acessa o Formulario
     var formulario = document.querySelector("#form-adiciona");
     var paciente = buscaValoresFormulario(formulario);
     var pacienteTr = criarTR(paciente);

     //variável para acessar tdBody
     var tabela = document.querySelector("#tabela-pacientes");
     tabela.appendChild(pacienteTr);

});


function buscaValoresFormulario(formulario){

    //Captura os Valores Digitados
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(formulario.peso.value, formulario.altura.value)
    }

    return paciente;
}


function criarTR(paciente){ 

    //Cria a Nova Tag <tr>
    var pacienteTr = document.createElement("tr");
  
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement ("td");
    var imcTd = document.createElement ("td");
 
    //Adiciona os valores
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //Adiciona as tags na tela do meleca
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}
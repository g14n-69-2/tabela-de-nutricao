//Acessa o Botão
var botaoAdicionar = document.querySelector("#adicionar-paciente")
//Executa os Códigos ao Clicar no Botão
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
     //Acessa o Formulario
     var formulario = document.querySelector("#form-adiciona");

     //Captura os Valores Digitados
     var nome = formulario.nome.value;
     var peso = formulario.peso.value;
     var altura = formulario.altura.value;
     var gordura = formulario.altura.value;
     //Cria a Nova Tag <tr>
     var pacienteTr = document.createElement("tr");

     var nomeTd = document.createElement("td");
     var pesoTd = document.createElement("td");
     var alturaTd = document.createElement("td");
     var gorduraTd = document.createElement ("td");
     var imcTd = document.createElement ("td");

     nomeTd.textContent = nome;
     pesoTd.textContent = peso;
     alturaTd.textContent = altura;
     gorduraTd.textContent = gordura;
     imcTd.textContent = calcularIMC(peso, altura);   

     //Adiciona as tags na tela do meleca
     pacienteTr.appendChild(nomeTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);
     pacienteTr.appendChild(imcTd);
     //variável para acessar tdBody
     var tabela = document.querySelector("#tabela-pacientes");
     tabela.appendChild(pacienteTr);

});

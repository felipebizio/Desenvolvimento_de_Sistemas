'use strick';

//Criando função para atualizar saudação
function atualizaSaudacao(){
    //Obtendo date de agora
    const agora = new Date();
    //console.log(agora.getDay());

    //Obtendo o número de semana inicindo de 0 até 6
    const dia = agora.getDay();

    //Criando Array de dias da semana equivalente
    const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'];
    //console.log(dias[dia]);

    //Obtendo horas em valor inteiro
    const hora = agora.getHours();

    //Declarando variaveis de cumprimento
    let cumprimento = '';

    //Verificação de saudação adequada
    if (hora < 6){
        cumprimento = 'Boa madrugada';
    }else if (hora < 12){
        cumprimento = 'Bom dia';
    }else if (hora < 18){
        cumprimento = "Boa tarde";
    }else{
        cumprimento = 'Boa noite';
    }

    //Selecionando elemento
    const saudacao = document.getElementById('saudacao');

    //Adicionando mo documento html
    saudacao.innerHTML = dias[dia]+' - '+ cumprimento;
    // ouuu 
    // saudacao.innerHTML = `${dias[dia]} oi ${cumprimento}`;

    //Chamando função de forma recursiva
    setTimeout(atualizaSaudacao,1000);
}
atualizaSaudacao();

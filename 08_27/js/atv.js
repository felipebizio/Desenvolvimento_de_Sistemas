'use strick';

let arrayNome = ['Luiz Felipe Xavier Bizio',
    'Igor Steins dos Santos','Lahra Souza Goiabinha',
    'Mateus Barboza Santana','Vitor Ribeiro Fonseca', 'Maria'];



console.log(arrayNome);

for (let i = 0; i < 6; i++){
    let nomeCompleto = arrayNome[i];
    let nomesDivididos = nomeCompleto.split(' ');
    let nome = nomesDivididos[0] + ' ' + nomesDivididos[nomesDivididos.length - 1];
    
    /*if ((nomesDivididos[nomesDivididos.length - 1]) = 'Maria'){
        nomesDivididos[nomesDivididos.length - 1] = '';
    }*/
    console.log(nome);
}

    
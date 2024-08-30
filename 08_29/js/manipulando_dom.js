'use strick';

let html = document.getElementById('saudacao');

console.log(html);

//DOM (Document Object Model) é a estrutura da página HTML.
//O DOM permite que linguagens interajam com a página

html.innerHTML = '<h1>Olá Mundo</h1>';

let alunos = [
    {nome:'Luiz Felipe', sobrenome: 'Xavier Bizio'},
    {nome: 'Igor', sobrenome: 'Stein'},
    {nome: 'Ramon', sobrenome:'de Holanda'}
]

let tabela = document.getElementById('tabela');

let exibir = '';
for (let aluno of alunos){
    tabela.innerHTML += '<tr>'
    tabela.innerHTML += '<td>'+aluno.nome+'</td>'
    tabela.innerHTML += '<td>'+aluno.sobrenome+'</td>'
    tabela.innerHTML += '</tr>'
}

tabela.innerHTML += exibir;

console.log(tabela);


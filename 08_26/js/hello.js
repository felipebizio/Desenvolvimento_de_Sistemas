'use strict'; //Toda variavel a ser usada deve ser declarada

//Esses são os primeiros comandos de JavaScript
/*Abaixo teremos as declarações variaveis
const
let
var
*/

/*Na declaração de variaveis em JavaScript usando VAR é possivel
 Redeclarar uma variavel*/
var nome = 'Luiz Felipe Xavier Bizio';
var nome = 'SENAI';

console.log(nome);

/*let curso = 'DDS';
O uso do LET impede a redeclaração de variaveis
let curso = 'Banco de Dados';*/

let nota1 = 10;
//nota = 11;
console.log(nota1);

//Tipos de veriaveis do JavScript
let texto = 'Aula de JavaScript';
console.log(texto);

let decimal = 20.8;
console.log(decimal);

let booleano = true;
console.log(booleano);

let num1 = '10';// "String"
let num2 = 5; // "Int"
console.log(num1+ num2); //String + INT = String

num1 = parseInt(num1);//No JavaScript é possivel fazer reuso de variaveis inclusive
console.log(num1+num2);

let dia = 'Segunda';
let saudacao = 'Boa noite';

console.log(dia+saudacao);
console.log(dia,saudacao);
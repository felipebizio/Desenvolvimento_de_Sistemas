'use strick'; //Impedir uso de variaveis não declaradas
let peso;
let altura;
let imc;

peso = prompt('Digite seu peso');
peso = parseFloat(peso);
console.log(peso);

altura = prompt('Digite sua altura');
altura = parseFloat(altura);
console.log(altura);

imc = peso/(altura*altura);
console.log(imc);

if (imc < 16.9) {
    console.log('Muito abaixo do peso');
}else if(imc < 18.4){
    console.log('Abaixo do Peso');
}else if(imc < 24.9){
    console.log('Peso normal');
}else if(imc < 29.9){
    console.log('Acima do Peso');
}else if(imc < 34.9){
    console.log('Obesidade grau I');
}else if(imc < 40){
    console.log('Obesidade grau II');
}else{
    console.log('Obesidade grau III');
}
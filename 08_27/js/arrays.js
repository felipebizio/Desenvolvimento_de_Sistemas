'use strick';//Impedir uso de variaveis não declaradas

let primeiroArray = new Array(5); //Declarando primeiro Array
primeiroArray[0] = 5;
primeiroArray[1] = true;
primeiroArray[2] = 'maçã';
//Para acessar uma posição do array podemos passar a posição entre []
//Por padrão a Array inicia na posição 0
console.log(primeiroArray);

let segundoArray = []; //Criando um array vazio
segundoArray[10] = 10; //Posso atribuir a uma nova posição no array vazio
console.log(segundoArray);

let terceiroArray = [5, true, 5.8,'pessoa']; //Criando um array já preenchido
console.log(terceiroArray);

let quartoArray = new Array(1, true,5.8, 'animal');
console.log(quartoArray);

let matriz = [[0,1], [0,2],[true, false]];

console.log(matriz[0]);
console.log(matriz[2][1]);

let cores = ['amarelo', 'azul', 'branco'];

console.log(cores.toString()); //Método toString converte para String separada por virgulas
console.log(cores.join(' | ')); //Método que permite converter o Array para String e permite escolher o separador
console.log(cores.concat(matriz, quartoArray)); //O método concat permite a junção de um ou mais Arrays

cores.push('preto', 'verde'); //O método push envia novas posições para o final

console.log(cores);

let ultimaCor = cores.pop(); //O método pop remove o último item do array e mostra ele
console.log(ultimaCor); 
console.log(cores);

let primeiraCor = cores.shift(); //O shift remove e retorna a primeira posição de um array
console.log(primeiraCor);
console.log(cores);

cores.unshift('roxo','turquesa','marron'); //O método push envia novas posições para o inicio
console.log(cores);

let fatia = cores.splice(1,2); //O método splice remove e retorna um pedaço do Array

console.log(cores);
console.log(fatia);

let nome = 'João de Souza Barboza'; //Uma String é um Array
console.log(nome[nome.length-1]);//

let arrayNome = nome.split(' ');
console.log(arrayNome);
let primeiroUltimo = arrayNome[0] + ' ' + arrayNome[arrayNome.length-1];
let alternativa = arrayNome.shift() + ' ' + arrayNome.pop();

console.log(primeiroUltimo);
console.log(alternativa);




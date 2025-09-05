/* 

  Funções são blocos de código reutilizaveis que executam uma tarefa especifica.

  Você pode definir uma função uma vez e usar(chamar/invocar) essa função quantas vezes você quiser

  sintaxe da declaração de uma função:

  function nomeDaFuncao(){
   // bloco de código que será executado
  }

  template literal strings (template strings) é uma forma de lidarmos com strings dinâmicas, pois podemos inserir variáveis, quebra de linhas.

  geralmente usamos a crase `` para iniciarmos o template strings

  para passarmos valores de variaveis dentro das templates, usamos ${variavel}

  exemplo:
  console.log(`Olá ${nomeDaVarial}, seja bem vindo(a)`)

*/

function saudacao() {
  console.log("Olá, mundo!");
}

// para fazer a função funcionar, precisamos invoca-la/chama-la
// exemplo abaixo de como invocar uma função
saudacao();

function cumprimentar(nome) {
  console.log(`Olá ${nome}. Seja bem vindo(a) novamente!`);
}

// 0 > 5
for (let i = 0; i <= 5; i++) {
  cumprimentar(i);
}

cumprimentar("Mago");
cumprimentar("Kellita");
cumprimentar("Juliana");
cumprimentar("Cassiano");
cumprimentar("Pedro");

function somar(a, b) {
  let soma = a + b;
  console.log(`A soma entre ${a} e ${b} é igual a: ${soma}`);
  // console.log(`A soma entre ${a} e ${b} é igual a: ${a + b}`);
}
somar(10, 5);

// Utilizando dados dinâmicos para realizar a soma
// Usamos o Number para converter o dado do prompt para number
// Pois o prompt por padrão lida com strings
let n1 = Number(prompt("Digite um número"));
let n2 = Number(prompt("Digite outro número"));
console.log(typeof n1);
console.log(typeof n2);

somar(n1, n2);

function subtrair(a, b) {
  return a - b;

  // código que vem depois do return dentro da função é completamente ignora, pois o programa/função para de ser executado assim que encontra o return
  // console.log(`Depois do return ${teste}`);
}

let resultadoSubtracao = subtrair(n1, n2);
console.log("O resultado da subtração é: " + resultadoSubtracao);

function dividir(a, b) {
  return a / b;
}

let resultadoDivisao = dividir(n1, n2);
console.log(`O resultado da divisão é: ${resultadoDivisao}`);

function formataPreco(preco) {
  return preco.toFixed(2);
}

let precoFormatado = formataPreco(resultadoDivisao);
alert(`O preço formatado é: R$${precoFormatado}`);

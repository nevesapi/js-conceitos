/* 
  Laços(loops) de repetição permitem executar um bloco de código várias vezes, de forma controlada.

  Isso EVITA repetição manual de código e é essencial para automatizar tarefas.

  Os laços mais comuns são: for, while, do while 

*/

// conhecendo o FOR - para
// É o laço de repetição mais comum. Geralmente ele é usado quando sabemos exatamente quantas vezes queremos repetir algo.

/* 
for(inicialização; condição ; incremento){
 // bloco de código que vai ser executado
}

 i = index/indice
 ++ operador de incremento
 -- operador de decremento
 i++ --> i = i + 1 soma padrão
 
*/
for (let i = 0; i <= 20; i++) {
  console.log("Contagem:", i);
}

// laço infinito
// j <= 5 - essa condição sempre vai ser verdadeira, pois j que é igual a zero, NUNCA vai ser maior que o valor de comparação que é 5, pois a cada rodada ele diminui em um o valor de j por conta do operador de decremento --

// for (let j = 0; j <= 5; j--) {
//   console.log("Contagem regressiva:", j);
// }

for (let j = 5; j >= 0; j--) {
  console.log("Contagem regressiva:", j);

  if (j === 0) {
    console.log("Feliz ano novo!");
  } else {
    console.log("Falta pouco...");
  }
}

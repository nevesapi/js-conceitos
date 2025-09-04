// while - enquanto
// Geralmente é usado quando NÃO sabemos quantas vezes algo será repetido

/* 

while (condição) {
   // bloco de código que vai ser executado ENQUANTO a condição for verdadeira
}

só para de ser executado quando a condição for falsa
*/
let contador = 0;

// NÃO DESCOMENTE O CÓDIGO ABAIXO, ELE É UM LOOP INFINITO
// while (contato < 5) {
//   console.log("Deu ruim", contador);
// }

// ++ operador de incremento
// contato++ --> contador = contator + 1

while (contador < 5) {
  console.log("-------------------");
  // nesse contexto, o operador de soma vira um operador de concatenação, ou seja, ele faz a união de valores
  console.log("laço while:" + contador);

  console.log("laço while:", contador);

  // sempre atualizamos a variavel de controle, isso evita que o nosso loop se torne infinito, pois o valor da variavel muda após cada iteração
  contador++;
}

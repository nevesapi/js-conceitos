// Operadores de comparação
// São usados para comparar valores
// Eles SEMPRE retornar TRUE(verdadeiro) ou FALSE(falso)
// tipo de dado boolean/ booleano
// Lógica de boole

/* 
  operadores de comparação mais comuns:
  > - maior que 
  < - menor que
  >= maior ou igual
  <= menor ou igual

  == igualdade
*/

let numero = 5;
let numero2 = "5";
const numero3 = 7;
const n4 = 10;

// > - maior que
console.log(numero > numero3);

// < - menor que
console.log(numero < numero3);

// >= maior ou igual
console.log(5 >= 7);

// <= menor ou igual
console.log(9 <= 9);

// == Igualdade
console.log(10 == 10);

// == Igualdade - Compara os valores, e não o TIPO DE DADO do elemento
console.log(10 == "10");

// Outros operadores de comparação
// === Igualdade estrita - Analisa o TIPO DE DADO e o VALOR do elemento
// != Diferente
// !== Diferente estrito

// Falso, pois os tipos de dados são diferentes embora os valores sejam os mesmos
console.log(11 === "11");

// Verdadeiro, pois os tipos de dados e os valores são iguais
console.log(11 === 11);

// != Diferente - Funciona de forma similar ao operador de Igualdades. Analisa somente o VALOR
console.log(5 != "5");

// !== Diferente estrito  - Funciona de forma similar ao Igualdade estrita. Ele também analisa o tipo de dado e o valor
console.log(5 !== "5");

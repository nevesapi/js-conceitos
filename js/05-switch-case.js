// Conhecendo a estrutura condicional switch(troca)
// Bem similar ao if/else. É utilizada para testar multiplos valores de uma mesma variavel ou expressão

/* 
 sintaxe básica do switch

 case - os cases(caso) são as condicionais que serão executadas caso ela corresponda com a expressão/condição do switch
 
 break - serve para parar a execução do código caso a condição seja atendida. Todos os cases devem ter um brak
 
 default - Só será executado caso nenhuma condição seja atendida

 switch(expressão/condição){
  case valor1:
    // código se a expressão === valor1
    break;
  case valor2:
    // código se a expressão === valor2
    break;

  default:
    // código que vai ser executado caso nenhuma das condições acima seja atendida
 }
*/

// exemplo de switch com dias da semana

// altere o valor da variavel dia e veja o switch em ação
let diaDaSemana = 4;

switch (diaDaSemana) {
  case 1:
    console.log("domingo");
    break;

  case 2:
    console.log("segunda-feira");
    break;

  case 3:
    console.log("terça-feira");
    break;

  case 4:
    console.log("quarta-feira");
    break;

  default:
    console.log("Dia inválido");
}

// exemplo de switch com operações matemáticas

// para ver o switch em ação, experimente alterar o de opeção para ver o resultado no console do navegador
//lembre-se de conectar esse arquivo a index.html

// operadores disponiveis:
// soma +
// subtração -
// multiplicação *
// divisão /
let operacao = "-";
let a = 10;
let b = 5;

switch (operacao) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":
    console.log(a / b);
    break;

  default:
    console.log("Operação inválida");
}

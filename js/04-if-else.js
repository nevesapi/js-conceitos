// Conhecendo a estrutura condicional if/else

/* 
  if - se (se isso acontecer/for verdadeiro, faça aquilo)

  // condicional simples
 if(condição){
  caso a condição seja verdadeira, executa tudo aqui dentro
 }


  
  if (condição) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade");
  }

  else - senão (se a condição não for atendida, executa o código dentro do else. Ele é executado por último caso nenhuma condição seja atendida)

*/

let idade = 36;
// condicional simples
// if (idade >= 18) {
//   console.log("Você é maior de idade.");
// }

// // Condicional composta
// if (idade >= 18) {
//   console.log("Você é maior de idade.");
// } else {
//   console.log("Você é menor de idade");
// }

// condicional encadeada
// Quando queremos analisar mais de uma condição
if (idade > 18) {
  console.log("Maior de idade");
} else if (idade <= 35) {
  console.log("Menor de idade");
} else {
  console.log("Não sei quem é você");
}

const banana = "banana";
console.log(banana);

// Exemplo de condicional encadeada - avaliando notas
let nota = 4.9;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bom");
} else if (nota >= 5) {
  console.log("Regular");
} else {
  console.log("Reprovado");
}

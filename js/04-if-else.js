// Conhecendo a estrutura condicional if/else

/* 
  if - se (se isso acontecer/for verdadeiro, faça aquilo)

  // condicional simples
 if(condição){
  caso a condição seja verdadeira, executa tudo aqui dentro
 }


 // condicional composta
if (condição) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade");
}

else - senão (se a condição não for atendida, executa o código dentro do else. Ele é executado por último caso nenhuma condição seja atendida)

*/

let idade = 50;
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
if (idade > 18) {
  console.log("Maior de idade");
} else if (idade <= 35) {
  console.log("Menor de idade");
} else {
  console.log("Não sei quem é você");
}

const banana = "banana";
console.log(banana);

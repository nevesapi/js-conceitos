// Conhecendo a estrutura condicional if/else

// condicional encadeada
// Quando queremos analisar mais de uma condição
if (idade > 18) {
  console.log("Você é um jovem");
} else if (idade > 35) {
  console.log("Você é um adulto");
} else if (idade > 60) {
  console.log("Você é um idoso");
} else {
  console.log("Você é uma criança, não deveria estar aqui!");
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

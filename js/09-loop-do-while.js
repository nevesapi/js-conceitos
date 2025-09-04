// do(faça) while(enquanto) - faça enquanto
// Geralmente usamos esse loop quando precisamos executar pelo menos UMA vez antes de verificar a condição

// let contador = 0;
// do {
//   contador++;

//   console.log("Número:", contador);
// } while (contador < 5);

let senha;

do {
  senha = prompt("Digite a sua senha: ");
  console.log(senha);
} while (senha !== "1234");

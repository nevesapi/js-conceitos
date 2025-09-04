// a ideia aqui é a gente tentar entender a diferença entre let, const e var diretamente no código

// para testar esse código, experimente remover os comentários das variaveis e veja como o código se comporta no console do navegador

// obs.: não se esqueça de conectar este arquivo na index.html

// o VAR é um elemento global, pode ser acessado em qualquer lugar, independente do contexto em que ele está inserido
// const z = "zeta";
// let y = "banana";

if (true) {
  var x = 10;
  // let e const são escopo de bloco
  // ou seja, só existe dentro do bloco if, para acessar o valor, depende do contexto onde ele está inserido
  const z = 30;
  let y = 9999;

  console.log("Dentro do if:");
  console.log("x (var):", x);
  console.log("y (let):", y);
  console.log("z (const):", z);
}

console.log("------------");
console.log("Fora do if:");

console.log("x (var):", x);

console.log("y (let):", y);
console.log("z (const):", z);

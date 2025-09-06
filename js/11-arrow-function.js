// As ARROW FUNCTIONS são uma forma mais curta e moderna de escrever/declarar/criar funções no JS.

// ARROW - SETA
// FUNCTION - FUNÇÃO
// FUNÇÃO DA SETA - tem esse nome, pois sua sitaxe, lemra uma seta

// sintaxe - arrow function - () => {}
// sintaxe - function nomeDaFuncao(){}

function separador() {
  console.log("---------------------");
}
separador();
// função anônima - usando arrow function
const teste = (a, b) => {
  let soma = a + b;
  console.log(`a soma entre ${a} e ${b} é igual a: ${soma}`);
};

const exemplo = () => `Olá mundo`;
teste(5, 9);

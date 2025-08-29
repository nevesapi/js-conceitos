// Conhecendo os tipos de dados primitivos
// Dados primitivos são os dados mais básicos e fundamentais da linguagem
// No Js temos 7 tipos de dados diferentes

// Lidando com strings - cadeia de caracteres
let saudacao = "Bom dia! Como vai você?";
let email = 'mago@magia.com';

// Lidando com number - números. Existe um limite de aproximadamente 2^53 -1 (dois elevado a potência 53)
const banco = 10203040;
const decimal = 41.54323456865456;
const numeroNegativo = -7;

// Lidando com Boolean - lógica booleana(verdadeiro ou falso)
let estaLogado = false;
let podeTrasnferir = true;

// Lidando com Undefined - indefinido. Quando uma variavel não possui valor
let semValor;

// Lidando com Null - Nulo. Representa a ausência(intencional) de valor.

let usuario = null;

let resultado = null;
resultado = 42;
resultado = "você marcou 42 pontos";

// Lidando com Symbol  - Simbolo. Representa um Identificador Único. Cada Symbol é ÚNICO.

let simbolo1 = Symbol();
let simbolo2 = Symbol("id"); /* cfe91128-f2cf-4b5d-a050-cc32eaf7fd77 */


// Lidando com o BigInt - Para lidar com numeros gigantescos. Muito bom para analise de dados complexos

let numeroGrande = 9007199254740992182371928731273010273n
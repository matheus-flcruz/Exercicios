// 1 ----------------------------------------------------------------------

const nome = "Matheus";
const idade = 35;
const cidade = "Santos";

console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);

// 2 ----------------------------------------------------------------------

const numeros = '35';
const number = Number(numeros);

console.log(`O número é ${number} e o tipo é ${typeof number}. Já o ${numeros} é do tipo ${typeof numeros}.`);

// 3 ----------------------------------------------------------------------

const entrada = '35';

function verificarEntrada(entrada) {
    if (entrada % 2 === 0) {
        return `O número ${entrada} é par.`;
    } else {
        return `O número ${entrada} é ímpar.`;
    }
}

console.log(verificarEntrada(entrada));

// 4 ----------------------------------------------------------------------

let usuario = 'admin';
let senha = 1234;

function verificarCredenciais(usuario, senha) {
    if (usuario === 'admin' && senha === 1234) {
    console.log('Acesso permitido.');
} else {
    console.log('Usuário ou Senha incorretos.');
}
}

console.log(verificarCredenciais(usuario, senha));

// 5 ----------------------------------------------------------------------

const entrada2 = 15;

function multiploDeTresECinco(entrada2) {
    if (entrada2 % 3 === 0 && entrada2 % 5 === 0) {
        return 'O número é múltiplo de 3 e 5.';
    } else if (entrada2 % 3 === 0) {
        return 'O número só é múltiplo de 3.';
    } else if (entrada2 % 5 === 0) {
        return 'O número só é múltiplo de 5.';
    } else {
        return 'O número não é múltiplo de 3 nem de 5.';
    }
}

console.log(multiploDeTresECinco(entrada2));
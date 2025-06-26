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

// 6 ----------------------------------------------------------------------

const matheus = {
    nome: 'Matheus',
    idade: 35,
}

const dandara = {
    nome: 'Dandara',
    idade: 4,
}

const maria = {
    nome: 'Maria',
    idade: 68,
}

const roberto = {
    nome: 'Roberto',
    idade: -1,
}

function maiorMenorIdade(pessoa) {
    if (pessoa.idade >= 18 && pessoa.idade < 60) {
        return `${pessoa.nome} é maior de idade.`;
    } else if (pessoa.idade < 18 && pessoa.idade >= 0) {
        return `${pessoa.nome} é menor de idade.`;
    } else if (pessoa.idade >= 60) {
        return `${pessoa.nome} é idoso(a).`;
    } else {
        return `${pessoa.nome} tem uma idade inválida.`;
    }
}

console.log(maiorMenorIdade(matheus));
console.log(maiorMenorIdade(dandara));
console.log(maiorMenorIdade(maria));
console.log(maiorMenorIdade(roberto));

// 7 ----------------------------------------------------------------------

let diaDaSemana = 5;

switch (diaDaSemana) {
    case 1:
        console.log('Hoje é Domingo');
        break;
    case 2:
        console.log('Hoje é Segunda-feira');
        break;
    case 3:
        console.log('Hoje é Terça-feira');
        break;
    case 4:
        console.log('Hoje é Quarta-feira');
        break;
    case 5:
        console.log('Hoje é Quinta-feira');
        break;
    case 6:
        console.log('Hoje é Sexta-feira');
        break;
    case 7:
        console.log('Hoje é Sábado');
        break;
    default:
        console.log('Dia inválido.');
}

// 8 ----------------------------------------------------------------------

let entrada3 = 15;

function calcularDobro(entrada3) {
    return entrada3 * 2;
}

console.log(`O dobro de ${entrada3} é ${calcularDobro(entrada3)}.`);

// 9 ----------------------------------------------------------------------

const entrada4 = [10, 36];

function maiorNumero(entrada4) {
    if (entrada4[0] > entrada4[1]) {
        return `O maior número é ${entrada4[0]}.`;
    } else if (entrada4[0] < entrada4[1]) {
        return `O maior número é ${entrada4[1]}.`;
    } else {
        return 'Os números são iguais.';
    }
}

console.log(maiorNumero(entrada4));

// 10 ---------------------------------------------------------------------

const entrada5 = 10;

function calcularFatorial(entrada5) {
    if (entrada5 < 0) {
        return 'Número inválido para fatorial.';
    }
    let fatorial = 1;
    for (let i = 1; i <= entrada5; i++) {
        fatorial *= i;
    }
    return `O fatorial de ${entrada5} é ${fatorial}.`;
}

console.log(calcularFatorial(entrada5));

// 11 ---------------------------------------------------------------------



// 12 ----------------------------------------------------------------------



// 13 ----------------------------------------------------------------------



// 14 ----------------------------------------------------------------------



// 15 ----------------------------------------------------------------------
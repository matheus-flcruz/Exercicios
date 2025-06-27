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

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla Cross',
    ano: 2025,
};

console.log(`O carro é um ${carro.marca} ${carro.modelo} do ano ${carro.ano}.`);

// 12 ----------------------------------------------------------------------

const usuario1 = {
    nome: 'Carlos',
    idade: 42,
}

function imprimirDadosUsuario(usuario) {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

imprimirDadosUsuario(usuario1);

// 13 ----------------------------------------------------------------------

class Pessoa {
    nome;
    idade;

    apresentar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'Ana';
pessoa1.idade = 30;
pessoa1.apresentar();
// 14 ----------------------------------------------------------------------

class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
}

const aluno1 = new Aluno('Maria Eduarda', [8.5, 9, 7.5]);

console.log(`A média do(a) aluno(a) ${aluno1.nome} é ${aluno1.calcularMedia().toFixed(2)}.`);
// 15 ----------------------------------------------------------------------

class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (this.saldo < valor) {
            throw new Error('Saldo insuficiente.');
        }
        this.saldo -= valor;
    }
}

const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(`Seu saldo é de R$ ${conta.saldo.toFixed(2)}`);

conta.sacar(200);
console.log(`Seu saldo é de R$ ${conta.saldo.toFixed(2)}`);

// 16 ----------------------------------------------------------------------

const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga'];
console.log(`Lista de frutas: ${frutas.join(', ')}.`);

const frutasComM = frutas.filter(fruta => fruta.toLowerCase().startsWith('m'));
console.log(`As frutas que começam com a letra 'M' nessa lista são: ${frutasComM.join(', ')}.`);

// 17 ----------------------------------------------------------------------

const numerosArray = [10, 2, 35, 5, 26];
let soma = 0;

for (let i = 0; i < numerosArray.length; i++) {
    soma += numerosArray[i];
}

console.log(`A soma de todos os números da array é ${soma}.`);

// 18 ----------------------------------------------------------------------

const nomes = ['Ana', 'Bruno', 'Carlos', 'Marcelo', 'Eduardo'];

const nomesComSeisLetras = nomes.filter(nome => nome.length >= 6);
console.log(`Os nomes com 6 letras ou mais são: ${nomesComSeisLetras.join(', ')}.`);
// 19 ----------------------------------------------------------------------

const multiplosDe10 = [];

for (let i = 1; i <= 100; i++) {
    if (i % 10 === 0) {
        multiplosDe10.push(i);
    }
}

const ultimo = multiplosDe10.pop();
console.log("Os números divisíveis por 10 são: " + multiplosDe10.join(", ") + " e " + ultimo + ".");

// 20 ----------------------------------------------------------------------

const notas2 = [9, 9.5, 8.5, 10];
let somaDasNotas = 0;


for (let i = 0; i < notas2.length; i++) {
    somaDasNotas += notas2[i];
}

const mediaNotas = somaDasNotas / notas2.length;

    if (mediaNotas >= 7) {
    console.log(`A média do(a) aluno(a) é ${mediaNotas.toFixed(2)}. Ele(a) foi aprovado!`);
} else {
    console.log(`A média do(a) aluno(a) é ${mediaNotas.toFixed(2)}. Ele(a) foi reprovado!`);
}

// 21 ----------------------------------------------------------------------



// 22 ----------------------------------------------------------------------

const numeros1 = [30, 22, 37];

let maiorNumero2 = numeros1[0];

for (let i = 1; i < numeros1.length; i++) {
    if (numeros1[i] > maiorNumero2) {
        maiorNumero2 = numeros1[i];
    }
}

console.log(`O maior número é ${maiorNumero2}.`);

// 23 ----------------------------------------------------------------------

const endereco = {
    rua: 'Rua das Flores',
    numero: 123,
    cidade: 'São Paulo'
}

console.log(`Endereço: ${endereco.rua}, ${endereco.numero} - ${endereco.cidade}.`);

// 24 ----------------------------------------------------------------------

const numeros2 = [10, 20, 30];

const [a, b, c] = numeros2;

console.log(`Os números são: ${a}, ${b} e ${c}.`);

// 25 ----------------------------------------------------------------------

const nome2 = gets();
const idade2 = gets();
const profissao2 = gets();

const pessoa2 = {
  nome: nome2,
  idade: idade2,
  profissao: profissao2
};

print(`Olá, ${pessoa2.nome2}! Você tem ${pessoa2.idade2} anos e trabalha como ${pessoa2.profissao2}.`);

let name = 'Davi';
let years = 18;
let boll = true;
let heigt;
let nota = null;
let textmesagem = `
Meu nome é ${name}, tenho ${years} anos
Fui aprovado? ${boll ? 'Sim' : 'Não'}
MInha altura ${heigt || 'Não Informado'} 
Minha nota ${nota ?? 'INDA NÃO FOI REGISTRADA'}
`;
console.log(textmesagem)

// Tipos de saida 
// Saida com ""
console.log('Hello World');
// alert
// console.log
// Saida com ''
console.log('Hello World');

// '' and ""
console.log('Ola"Mundo"!');

let text = 'Abu';

// Saida de dados com concatenação de dados
console.log('Ola' + text + '!');
console.log('Ola' ,text, '!');

// Quebra de linha
console.log('Ola \n' + text + '!');

// Saida de Dados com  com interpolação
console.log(`Ola Baiano Vagabundo
${text}
`);

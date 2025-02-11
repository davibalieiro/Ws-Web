let num = Number(prompt('Digite um number: '))
let soma = num;


do {
    let num = Number(prompt('Digite um number: '))
    soma += num
} while(num != 0);
alert('Soma:' + soma)
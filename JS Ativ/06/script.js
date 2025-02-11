const n1 = Number(prompt('Digite um numero: '));

if (n1 % 3 == 0 && n1 % 5 == 0){
    alert('FrizzBuzz')
}
else if (n1 % 3 == 0) {
    alert('Frizz')
}
else if ( n1 % 5 == 0) {
    alert('Buzz')
}
else {
    alert('Desgraça')
}
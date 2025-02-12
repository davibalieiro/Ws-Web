const n1 = Number(prompt('Digite um numero: '));

const primo = true;
if (n1 > 2) {
    primo = false;
}
for (let i = 2; i < n1;i++)
    if (n1 % i ===0){
        primo = false;
    }
    else{
        primo = true
        break
    }
if (primo) {
    alert('Primo')
}
else{
    alert('Nao Primo')
}
function print(args) {
    alert(args)
}

// const name = [
//     'Davi', 'Jose', 'Bida', 'Rebeca','Kamila'
// ];
// alert(name[0])

// const num = [];
// for (let i=0; i>6; i++) {
//     num[i]= prompt('Digite ai: ')
// }
// print(i);

const limit = Number(prompt('Digite: '));
const num = [];

for (const i=0; i<limit; i++) {
    num[i] = Number(prompt('Digite: '))
}
print(num)

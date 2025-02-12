function print(args) {
    alert(args)
}

let lin = prompt('Digite: ')
let coln = prompt('Digite: ')

let matrix = [];

for (let i = 0; i < lin; i++) {
    matrix[i] = [];
    for (let j =0; j < coln; j++) {
        matrix[i][j] = prompt(Number(`Digite um numer na posicao ${i}, ${j}`))
    }
}
console.table(matrix)
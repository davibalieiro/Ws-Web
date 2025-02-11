// function print(args) {
//     return alert(args)
// };
const name = prompt('Digite seu nome:')

// Function sem param
// function hello(){
//     alert('hello')
// };
// hello();

// Function com param
function print(args) {
    alert(args)
}
// print(name);

// Function com param and return
// function soma(x,y) {
//     return x + y
// }
// const resul = soma(2,8)
// print(resul)

// Function anime
const quadrado = function(anime){
    return anime * anime
}
print(quadrado(10))

// Arrow function
function soma(x,y) {
    return x + y
}
const soma = (x,y) => x+y;

// Function de Order Up
function ap(num, oper) {
    oper(num)
}
const bd = (num) => num *2;
print(ap(20,bd))


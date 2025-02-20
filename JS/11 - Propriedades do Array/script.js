function print(args) {
    alert(args)
}

// const Bomba = ['Deca', 'Trebo', 'Emorgenin', 'Gh', 'Dura']

// for (let i = 0; i < Bomba.length; i++) {
//     print(`${i+1}º Temos essa aqui: ${Bomba[i]}`)
// }

// // Push - Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
// const Fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// print(Fruits)
// Fruits.push('Kiwi')
// print(Fruits)

// // Pop - Remove o último elemento de um array e retorna esse elemento.
// const Color = ['Red', 'Green', 'Blue', 'Yellow']
// print(Color)
// Color.pop()
// print(Color)

// // Shift - Remove o primeiro elemento de um array e retorna esse elemento.
// const Cars = ['BMW', 'Volvo', 'Saab', 'Ford']
// print(Cars)
// Cars.shift()
// print(Cars)

// // Unshift - Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array. 
// const Animals = ['Dog', 'Cat', 'Bird', 'Fish']
// print(Animals)
// Animals.unshift('Horse')
// Animals.unshift('Cow', 'Pig')
// print(Animals)

// // Splice - Adiciona e/ou remove elementos de um array.
// const Months = ['Jan', 'March', 'April', 'June']
// print(Months)
// Months.splice(1, 0, 'Feb')
// print(Months)

// Slice - Retorna um novo array "fatiando" o array original.
// const Days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// print(Days)
// const Days2 = Days.slice(2, 5)
// print(Days2)

// // Concat - Retorna um novo array contendo todos os arrays ou valores passados como parâmetro.
// const MyGirls = ['Cecilia', 'Larissa', 'Leticia']
// const MyBoys = ['Lucas', 'Gustavo', 'Gabriel']
// const MyChildren = MyGirls.concat(MyBoys)
// print(MyChildren)

// // Includes - Verifica se um array contém um determinado elemento e retorna true ou false.
// const Frutas = ['Banana', 'Orange', 'Apple', 'Mango']
// print(Frutas.includes('Banana'))
// print(Frutas.includes('Kiwi'))
// print(Frutas.includes('Apple', 2))

// // IndexOf - Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array.
// const Colors = ['Red', 'Green', 'Blue', 'Yellow']
// print(Colors.indexOf('Blue'))
// print(Colors.indexOf('Green'))
// print(Colors.indexOf('Purple'))
// print(Colors.indexOf('Blue', 2))

// // LastIndexOf - Retorna o último índice em que um determinado elemento pode ser encontrado no array.
// const Numbers = [3, 4, 5, 6, 7]
// print(Numbers.lastIndexOf(4))
// print(Numbers.lastIndexOf(6))
// print(Numbers.lastIndexOf(8))

// // Reverse - Inverte a ordem dos elementos de um array.
// const Cars = ['BMW', 'Volvo', 'Saab', 'Ford']
// print(Cars)
// Cars.reverse()
// print(Cars)

// // Sort - Ordena os elementos de um array.
// const Points = [40, 100, 1, 5, 25, 10]
// print(Points)
// Points.sort()
// print(Points)

// // Join - Junta todos os elementos de um array em uma string.
// const MyFruits = ['Banana', 'Orange', 'Apple', 'Mango']
// print(MyFruits.join())
// print(MyFruits.join('*'))
// print(MyFruits.join('-'))

// // Fill - Preenche todos os elementos de um array com um valor estático.
// const Cars = ['BMW', 'Volvo', 'Saab', 'Ford']
// print(Cars)
// Cars.fill('Toyota')
// print(Cars)

// // Find - Retorna o primeiro elemento de um array que atende a uma condição específica.
// function myFunction(self) {
//     return self > 10
// }
// const Numbers = [4, 9, 16, 25, 29]
// const First = Numbers.find(myFunction)
// print(First)

// // FindIndex - Retorna o índice do primeiro elemento de um array que atende a uma condição específica.
// function myFunction(self) {
//     return self > 10
// }
// const Numbers = [4, 9, 16, 25, 29]
// const First = Numbers.findIndex(myFunction)
// print(First)

// // ForEach - Chama uma função para cada elemento em um array.
// function myFunction(self) {
//     print(self)
// }
// const Numbers = [45, 4, 9, 16, 25]
// Numbers.forEach(myFunction)

// // Map - Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
// function myFunction(self) {
//     return self * 2

// }
// const Numbers = [45, 4, 9, 16, 25]
// const NewNumbers = Numbers.map(myFunction)
// print(NewNumbers)

// // Filter - Cria um novo array com todos os elementos de um array que passam por uma função de teste.
// function myFunction(self) {
//     return self > 10
// }
// const Numbers = [45, 4, 9, 16, 25]
// const NewNumbers = Numbers.filter(myFunction)
// print(NewNumbers)

// // Reduce - Reduz o array a um único valor.
// function myFunction(total, self) {
//     return total + self
// }
// const Numbers = [45, 4, 9, 16, 25]
// const Sum = Numbers.reduce(myFunction)
// print(Sum)

// Find - Retorna o primeiro elemento de um array que atende a uma condição específica.
function myFunction(self) {
    return self > 10
}
const Numbers = [4, 9, 16, 25, 29]
const First = Numbers.find(myFunction)
print(First)

function print(args) {
    alert(args)
}

const Bomba = ['Deca', 'Trebo', 'Emorgenin', 'Gh', 'Dura']

for (let i = 0; i < Bomba.length; i++) {
    print(`${i+1}º Temos essa aqui: ${Bomba[i]}`)
}

// Push - Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
const Fruits = ['Banana', 'Orange', 'Apple', 'Mango']
print(Fruits)
Fruits.push('Kiwi')
print(Fruits)

// Pop - Remove o último elemento de um array e retorna esse elemento.
const Color = ['Red', 'Green', 'Blue', 'Yellow']
print(Color)
Color.pop()
print(Color)

// Shift - Remove o primeiro elemento de um array e retorna esse elemento.
const Cars = ['BMW', 'Volvo', 'Saab', 'Ford']
print(Cars)
Cars.shift()
print(Cars)

// Unshift - Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array. 
const Animals = ['Dog', 'Cat', 'Bird', 'Fish']
print(Animals)
Animals.unshift('Horse')
Animals.unshift('Cow', 'Pig')
print(Animals)

// Splice - Adiciona e/ou remove elementos de um array.
const Months = ['Jan', 'March', 'April', 'June']
print(Months)
Months.splice(1, 0, 'Feb')
print(Months)
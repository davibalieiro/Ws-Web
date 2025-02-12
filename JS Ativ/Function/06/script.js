function print(args) {
    alert(args)
}

const instance = function(num) {
    if (num != 0){
        alert('Par')
    }
    else {
        alert('Impar')
    }
}
print(instance(10))
function print(args) {
    alert(args)
};

let h2 = document.getElementById('title');
let btmn = document.getElementById('btnad');
let btad = document.getElementById('btnal');
let list = document.getElementById('list');

// let 

let titleElement = document.getElementsById('title');
titleElement.addEventListener('click', () => {
    h2.textContent = 'Hello World'
});


// let adicionar = document.getElementsById('btad');
// adicionar.addEventListener('click', () => {
//     let h4 = document.createElement('h4')
//     h4.textContent = 'Ola a Pedra'
//     document.body.appendChild(h4)
// });

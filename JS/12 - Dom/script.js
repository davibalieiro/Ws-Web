function print(args) {
    alert(args)
}

// Selection id
let selectionid = document.getElementById('title')
print(Selection)

// Selection class
let selectionclass = document.getElementsByClassName('item')
print(selectionclass)

// Selection tag
let selectiontag = document.getElementsByTagName('ul')
print(selectiontag)

// Selection querySelector
let selectionquery = document.querySelector('#title')
print(selectionquery)

// Selection querySelectorAll
let selectionqueryall = document.querySelectorAll('.item')
print(selectionqueryall)


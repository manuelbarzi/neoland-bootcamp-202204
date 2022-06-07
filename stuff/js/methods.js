const o = { 0: 'hola mundo', 1: 'hello world', 2: 'ciao mondo', 3: 'hola mon', length: 4 }

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currElem = array[i]

        callback(currElem)
    }
}

forEach(o, elem => console.log(elem))
// VM16812:1 hola mundo
// VM16812:1 hello world
// VM16812:1 ciao mondo
// VM16812:1 hola mon

o.forEach(elem => console.log(elem))
// VM16891:1 Uncaught TypeError: o.forEach is not a function
//     at <anonymous>:1:3
// (anonymous) @ VM16891:1

o.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const currElem = this[i]

        callback(currElem)
    }
}

o.forEach(elem => console.log(elem))
// VM17015:1 hola mundo
// VM17015:1 hello world
// VM17015:1 ciao mondo
// VM17015:1 hola mon

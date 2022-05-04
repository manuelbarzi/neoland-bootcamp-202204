function chainPrototypes(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

function createId() { // declaramos funcion en la genaremos un ID unico
    return (Math.random() + Date.now()).toFixed(10)
    // Devuelve un numero random + la fecha con decimales maximo 10 
}
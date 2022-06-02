function chainPrototypes(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

function createId() { // declaramos funcion en la genaremos un ID unico
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
    // Devuelve un numero random + la fecha con decimales maximo 10 
}
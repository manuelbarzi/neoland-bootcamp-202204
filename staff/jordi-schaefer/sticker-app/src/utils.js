
// creo una funcion para unir los hijos con los padres
// decirle a los objetos que extienden del objeto principal = Components

function chainPrototypes(parent, child) {
    child.prototype = Object.create(parent.prototype) // creo constructor del padre Component
    child.prototype.constructor = child // se lo pongo al hijo (ej. HelloWorld)
}  // y asi hereda sus funciones/metodos


function createId() {
    return Math.random()*100000000000000000 + Date.now()  // quiero que el math random me de un numero entero
}
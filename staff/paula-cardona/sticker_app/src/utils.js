function chainPrototypes(parent,child) {
    child.prototype = Object.create( parent.prototype)
    child.prototype.constructor = child
}

function createId() {
    return (Math.random () + Date.now()).toFixed(10)
}

/*tenemos que crear una ID cuando se crea la nota para buscarla y
saber como era: identificador único.
- math random: número entre el 0 y el 0.99 periodico
-date.now : fecga desde 1 de enenro de 1971
-función to fixed para ver cuantos decimales queremos*/

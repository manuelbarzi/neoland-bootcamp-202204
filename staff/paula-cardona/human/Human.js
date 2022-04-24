//contructor: construye tu y pones tu los elementos
function Human() {
    const random = Math.random()
//los this son las características
    this.gender =  random > .49 && random < .51? 'intersex' : random >= .51? 'female' : 'male'
    this.stomach = []
}
//las acciones del h son los prototypes
Human.prototype.drink = function(drink) {
    this.stomach.unshift(drink)
}

Human.prototype.eat = function(meal) {
    this.stomach.unshift(meal) //con el método unshift 
    //UNSHIFT: añade un elemento al principio del array.
    //utilizo este método para añadir meal al prinicip del array stomach.
    //utilizo meal porque es lo que quiero pasar por la función
}

Human.prototype.poo = function() {
    this.stomach.pop() // POP: elimina el último elemento del array
    this.stomach.pop()
    this.stomach.pop()
    return '💩'
}

Human.prototype.pee = function() {
    this.stomach.shift() // SHIFT: elimina el primer elemento del array
    return '💦'
}
//stomach.shift= propiedad del humano que le hacemos el método shift.
function Human() {
    const random = Math.random()
    this.gender =  random > .49 && random < .51? 'intersex' : random >= .51? 'female' : 'male'
    this.stomach = []
}


Human.prototype.drink = function(drink) {
    this.stomach.unshift(drink)
}

Human.prototype.eat = function(meal) {
    this.stomach.unshift(meal) // añadimos meal al principio del array usando el metodo unshift
}

Human.prototype.poo = function() {
    this.stomach.pop() // elimina el ultimo elemento del array
    this.stomach.pop()
    this.stomach.pop()
    return '💩'
}

Human.prototype.pee = function() {
    this.stomach.shift()  // shift elimina el primer elemento del array
    return '💦'
}
function Human(gender, stomach) {
    const random = Math.random()

    this.gender =  random > .49 && random < .51? 'intersex' : random >= .51? 'female' : 'male'
    this.stomach = stomach
}

Human.prototype.drink = function(drink) {
    this.stomach.unshift(drink)
}

Human.prototype.eat = function(meal) {
    this.stomach.unshift(meal)
}

Human.prototype.poo = function() {
    this.stomach.splice(1,3,)
    return "💩"
}

Human.prototype.pee = function(pee) {
    this.stomach.shift()
    return "💦"
}
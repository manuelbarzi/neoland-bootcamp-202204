function Human() {
    const random = Math.random()

    this.gender =  random > .49 && random < .51? 'intersex' : random >= .51? 'female' : 'male'
}

Human.prototype.drink = function(drink) {

}

Human.prototype.eat = function(meal) {
    
}

Human.prototype.poo = function() {
    
}

Human.prototype.pee = function() {
    
}
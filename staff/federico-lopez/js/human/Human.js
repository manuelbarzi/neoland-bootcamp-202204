function Human() {
    
    const random = Math.random()

    this.gender =  random > .49 && random < .51? 'intersex' : random >= .51? 'female' : 'male'
    this.stomach = []

}


Human.prototype.eat = function(meal) {
    this.stomach.unshift(meal)
}

Human.prototype.drink = function(drink) {
    this.stomach.unshift(drink)
}

const meals = ['🥗', '🌭', '🍔']
const drinks = ['🥤']

Human.prototype.poo = function() {
    for (let i = this.stomach.length - 1; i >= 0; i--) {
        if (meals.includes(this.stomach[i]))
            this.stomach.splice(i, 1)
    }
    return '💩'
}

Human.prototype.pee = function() {
    for (let i = this.stomach.length - 1; i >= 0; i--) {
        if (drinks.includes(this.stomach[i]))
            this.stomach.splice(i, 1)
    }
    return '💦'
}
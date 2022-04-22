function Human() {
    const random = Math.random()

    this.gender = random > .49 && random < .51 ? 'intersex' : random >= .51 ? 'female' : 'male'

    this.stomach = []
}

Human.prototype.drink = function (drink) {
    this.stomach.unshift(drink)
}

Human.prototype.eat = function (meal) {
    this.stomach.unshift(meal)
}


Human.prototype.poo = function () {
    this.stomach.splice(1)
    return '💩'
}


Human.prototype.pee = function () {
    this.stomach.splice(0, 1)
    return '💦'
}
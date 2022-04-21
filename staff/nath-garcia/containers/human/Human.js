function Human() {
    const random = Math.random()

    this.gender = random > .49 && random < .51 ? 'intersex' : random >= .51 ? 'female' : 'male'
}

Human.prototype.drink = function (drink) { //método unshift
   this.stomach.unshift(drink)
}

Human.prototype.eat = function (meal) { //
    this.stomach.unshift(meal)
}

Human.prototype.poo = function () { //método splice
    this.stomach.splice(1, 3 )
    return '💩'
}

Human.prototype.pee = function (pee) { //método splice
    this.stomach.shift()
    return '💦'
}

function Human() {
    const random = Math.random()

    this.gender =  random > .49 && random < .51? 'intersex' : random >= .51? 'female' : 'male'
    this.stomach = []
}

// const h = new Human

// h.stomach = ['pepsi']

// const h2 = new Human
// console.log(h2.stomach) expected output: []

Human.prototype.drink = function(drink) {
    this.stomach.unshift(drink)
}

Human.prototype.eat = function(meal) {
    this.stomach.unshift(meal)
}


Human.prototype.poo = function() {
    this.stomach.length = 1
    return '💩'
}

Human.prototype.pee = function() {
    this.stomach.shift()
    return '💦'
}

// function Container(width, height, depth) {
//     // Atributos
//     this.status = '🔒';
//     this.width = width;
//     this.height = height; 
//     this.depth = depth;
// }

// // Metodos

// Container.prototype.open = function() {
//     this.status = '🔓'
// }

// Container.prototype.close = function() {
//     this.status = '🔒';
// }
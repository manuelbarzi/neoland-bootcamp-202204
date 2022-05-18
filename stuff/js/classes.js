class Thing {
    constructor(name) {
        this.name = name
    }

    toString() { // overrides Object.prototype.toString
        return this.constructor.name + ': ' + this.name
    }

    getInheritanceChain() {
        return super.constructor.name + ' -> ' + Thing.name
    }
}

class Car extends Thing {
    constructor(color, brand, model) {
        super('car')

        this.color = color
        this.brand = brand
        this.model = model
    }

    toString() { // overrides Thing.prototype.toString
        return this.constructor.name + ': ' + this.color + ', ' + this.brand + ' ' + this.model
    }

    getInheritanceChain() {
        return super.getInheritanceChain() + ' -> ' + Car.name
    }
}

class Touring extends Car {
    constructor(color, brand, model) {
        super(color, brand, model)
    }

    getInheritanceChain() {
        return super.getInheritanceChain() + ' -> ' + Touring.name
    }
}

c = new Touring('white', 'Seat', 'Ibiza')
console.log(c.toString())
console.log(c.getInheritanceChain())
// VM2774:44 Touring: white, Seat Ibiza
// VM2774:45 Object -> Thing -> Car -> Touring
// undefined
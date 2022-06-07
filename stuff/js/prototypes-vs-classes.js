class Person { 
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    eat() { console.log(this.name + ': ñam ñam...') }
}

//const peter = new Person('Peter', 20, 'male')

//peter.eat()

class Woman extends Person {
    constructor(name, age) {
        super(name, age, 'female')
    }
}

class Man extends Person {
    constructor(name, age) {
        super(name, age, 'male')
    }
}

const peter = new Man('Peter', 20)
peter.eat()

const wendy = new Woman('Wendy', 20)
wendy.eat()

console.assert(peter instanceof Person)
console.assert(peter instanceof Man)
console.assert(peter instanceof Woman)


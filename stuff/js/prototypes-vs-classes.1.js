function Person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

Person.prototype.eat = function() { console.log(this.name + ': ñam ñam...') }

//const peter = new Person('Peter', 20, 'male')

//peter.eat()

function Woman(name, age) {
    Person.call(this, name, age, 'female')
}

Woman.prototype = Object.create(Person.prototype)
Woman.prototype.constructor = Woman

function Man(name, age) {
    Person.call(this, name, age, 'male')
}

Man.prototype = Object.create(Person.prototype)
Man.prototype.constructor = Man

const peter = new Man('Peter', 20)
peter.eat()

const wendy = new Woman('Wendy', 20)
wendy.eat()

console.assert(peter instanceof Person)
console.assert(peter instanceof Man)
console.assert(peter instanceof Woman)


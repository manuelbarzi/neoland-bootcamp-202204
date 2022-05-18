/**
 * Person
 */
 function Person(name) {
    this.name = name
}

Person.prototype.salute = function(to) {
    return this.name + ': hello ' + to
}

const peter = new Person('Peter')

console.assert(peter instanceof Person)
console.assert(peter.constructor === Person)

console.log(peter.salute('Wendy'))


/**
 * Developer
 */
function Developer(name) {
    this.name = name
}

//Developer.prototype = new Person
Developer.prototype = Object.create(Person.prototype)
Developer.prototype.constructor = Developer

Developer.prototype.code = function() {
    return this.name + ': 👨🏻‍💻'
}

const dany = new Developer('Dany')

console.assert(dany instanceof Developer)
console.assert(dany instanceof Person)
console.assert(dany.constructor === Developer)

console.log(dany.salute('Wendy'))
console.log(dany.code())


/**
 * JsDeveloper
 */
function JSDeveloper(name) {
    this.name = name
}

//Developer.prototype = new Person
JSDeveloper.prototype = Object.create(Developer.prototype)
JSDeveloper.prototype.constructor = JSDeveloper

JSDeveloper.prototype.code = function() {
    return this.name + ': 👨🏻‍💻 js...'
}

const maria = new JSDeveloper('Maria')

console.assert(maria instanceof JSDeveloper)
console.assert(maria instanceof Developer)
console.assert(maria instanceof Person)
console.assert(maria.constructor === JSDeveloper)

console.log(maria.salute('Wendy'))
console.log(maria.code())

// VM7021:17 Peter: hello Wendy
// VM7021:41 Dany: hello Wendy
// VM7021:42 Dany: 👨🏻‍💻
// VM7021:67 Maria: hello Wendy
// VM7021:68 Maria: 👨🏻‍💻 js...
function FullStackDeveloper(name, email, socialSecurityNumber, id, birthDate) {
    
    Developer.call(this, name, email, socialSecurityNumber, id, birthDate)  
}

FullStackDeveloper.prototype = Object.create(Developer.prototype)
FullStackDeveloper.prototype.constructor = FullStackDeveloper

FullStackDeveloper.prototype.code = function() { // method overriding
    this.status = 'coding full stack'
}
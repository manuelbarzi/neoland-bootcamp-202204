function FullStackDeveloper(name, email, socialSegurityNumber, id, birthDate){
    
    Developer.call(this, name, email, socialSegurityNumber, id, birthDate)
}

FullStackDeveloper.prototype = Object.create(Developer.prototype)
FullStackDeveloper.prototype.constructor = FullStackDeveloper

FullStackDeveloper.prototype.code = function () {
    this.status = 'coding full stack'
}


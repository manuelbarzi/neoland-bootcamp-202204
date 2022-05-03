function Developer(name, email, socialSecurityNumber, id, birthDate) {
    this.name = name
    this.email = email
    this.socialSecurityNumber = socialSecurityNumber
    this.id = id
    this.birthDate = birthDate
    this.status = ''
}


Developer.prototype = Object.create(Worker.prototype)
Developer.prototype.constructor = Developer
// console.log(Developer.prototype)


Developer.prototype.work = function() {
    this.status = 'working'
}

Developer.prototype.break = function() {
    this.status = 'pause'
}

Developer.prototype.code = function() {
    this.status = 'coding'
}
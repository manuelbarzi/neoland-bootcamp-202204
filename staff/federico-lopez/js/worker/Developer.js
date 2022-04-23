function Developer(name, email, socialSecurityNumber, id, birthDate) {
    this.name = name
    this.email = email
    this.socialSecurityNumber = socialSecurityNumber
    this.id = id
    this.birthDate = birthDate
    this.status = 'pause'
}

Developer.prototype = Object.create(Worker.prototype)
Developer.prototype.constructor = Developer

Developer.prototype.code = function() {
    this.status = 'coding'
}
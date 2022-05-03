function Manager(name, email, socialSecurityNumber, id, birthDate) {
    this.name = name
    this.email = email
    this.socialSecurityNumber = socialSecurityNumber
    this.id = id
    this.birthDate = birthDate
    this.status = ''
}


Manager.prototype = Object.create(Developer.prototype)
Developer.prototype.constructor = Developer


Manager.prototype.work = function() {
    this.status = 'working'
}


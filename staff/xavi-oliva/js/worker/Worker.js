function Worker(name, email, socialSecurityNumber, id, birthDate) {

    this.name = name
    this.email = email
    this.socialSecurityNumber = socialSecurityNumber
    this.id = id
    this.birthDate = birthDate
    
    this.status = 'pause'

}

Worker.prototype.work = function () {
    this.status = 'working'
}

Worker.prototype.break =function () {
    this.status = 'pause'
}

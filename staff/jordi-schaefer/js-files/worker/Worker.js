function Worker(name, email, SEC, id, birthDate) {
    this.name = name
    this.email = email
    this.socialSecurityNumber = SEC
    this.id = id
    this.birthDate = birthDate
    this.status = 'at house'
}

Worker.prototype.work = function (){
    this.status = 'working'
}

Worker.prototype.break = function (){
    this.status = 'pause'
}
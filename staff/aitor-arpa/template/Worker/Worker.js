function Worker (name, email, ss, Id, birthDate) {

    this.name = name
    this.email = email
    this.socialSecurityNumber = ss
    this.id = Id
    this.birthDate = birthDate
    this.status = 'pause'
}

Worker.prototype.work = function() {
    this.status = 'working'
}

Worker.prototype.break = function (){

    this.status = 'pause'
}
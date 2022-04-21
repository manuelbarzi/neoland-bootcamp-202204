function Worker(name, mail, inss, idn, birthDate ) {
    this.name = name
    this.email = mail
    this.socialSecurityNumber = inss
    this.id = idn 
    this.birthDate = birthDate
}
Worker.prototype.work = function(){
    this.status = 'working'
}

Worker.prototype.break = function(){
    this.status = 'pause'
}
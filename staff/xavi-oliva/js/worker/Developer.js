function Developer(name, email, socialSecurityNumber, id, birthDate) {

    /** this.name = name
        this.email = email
        this.socialSecurityNumber = socialSecurityNumber
        this.id = id
        this.birthDate = birthDate
        
        this.status = 'pause' 
    */
    // función call para asignar/llamar/ las propiedades
    // de Worker a Developer y no tener que repetir las líneas de arriba
    // Se altera el this

    Worker.call(this, name, email, socialSecurityNumber, id, birthDate)
}

Developer.prototype = Object.create(Worker.prototype)
Developer.prototype.constructor = Developer

Developer.prototype.code = function () {
    this.status = 'coding'
}


function Developer(name, mail, inss, idn, birthDate) {
	// this.name = name
    // this.email = mail
    // this.socialSecurityNumber = inss
    // this.id = idn 
    // this.birthDate = birthDate
    // this.status = 'pause'
    Developer.call(this name, mail, inss, idn, birthDate)

}

Developer.prototype = Object.create(Worker.prototype)
Developer.prototype.constructor = Developer
/*

La linea 9 es el constructor. Estoy creando 

 
*/

Developer.prototype.code = function(){
    this.status = 'coding'
}
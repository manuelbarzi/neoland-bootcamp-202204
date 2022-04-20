
//Creamos el molde no se heredaran 
function Developer (name, email, ss, Id, birthDate) {

    this.name = name
    this.email = email
    this.socialSecurityNumber = ss
    this.id = Id
    this.birthDate = birthDate
}


Developer.prototype = Object.create(Worker.prototype)
Developer.prototype.constructor = Developer
// los prototype se heredan el molde no 


Developer.prototype.code = function() {
    this.status = 'coding'
}
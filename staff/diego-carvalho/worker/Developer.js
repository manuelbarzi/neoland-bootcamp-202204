function Developer(name, email, socialSecurityNumber, id, birthDate) {
    /*this.name = name
    this.email = email
    this.socialSecurityNumber = socialSecurityNumber
    this.id = id
    this.birthDate = birthDate
    this.status = 'pause'*/
    Worker.call(this, name, email, socialSecurityNumber, id, birthDate)
}
//Developer prototipo sea criado a partir del Worker prototipo
Developer.prototype = Object.create(Worker.prototype)
Developer.prototype.constructor = Developer//defino que Developer prototypo constructor sea Developer 

Developer.prototype.code = function () {//Develope que ahora es constructor crea para si la función de status coding...
    this.status = 'coding'
}
/*...de ahora a delante los prototipos de Developer(los hijos)además de name,email,
socialSegurityNumber, id y birthDate tendrá el status coding.
*/
function Manager(name, email, socialSecurityNumber, id, birthDate) {

    this.name = name
    this.email = email
    this.socialSecurityNumber = socialSecurityNumber
    this.id = id
    this.birthDate = birthDate

}

Manager.prototype = Object.create(Worker.prototype)
Manager.prototype.constructor = Manager

Manager.prototype.manage = function () {
    this.status = 'managing'
}
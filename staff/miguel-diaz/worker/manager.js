function Manager(name , email, socialSecurityNumber, id, birthDate) {
    Worker.call(this, name, email, socialSecurityNumber, id, birthDate)
}

Manager.prototype = Object.create(Worker.prototype)
Manager.prototype.constructor = Manager


Manager.prototype.position = function() {
    this.status = 'lead'
}

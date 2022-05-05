function Manager (name, email, socialSecurityNumber, id, birthDate){

    Worker.call(this, name, email, socialSecurityNumber, id, birthDate )
}
Manager.prototype = Object.create(Worker.prototype)
Manager.prototype.constructor = Manager

Manager.prototype.work = function(){
    this.status = 'working'
}
Manager.prototype.break = function(){
    this.status = 'pause'
}

Manager.prototype.manage = function(){
    this.status = 'managing a department of the company'
}
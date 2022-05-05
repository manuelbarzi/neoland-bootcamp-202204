function CEO (name, email, socialSegurityNumber, id, birthDate){

    Worker.call(this, name, email, socialSegurityNumber, id, birthDate)
}
CEO.prototype = Object.create(Worker.prototype)
CEO.prototype.constructor = CEO

CEO.prototype.work = function() {
    this.status = 'working'
}
CEO.prototype.break = function() {
    this.status = 'pause'
}
CEO.prototype.travel = function() {
    this.status = 'travelling'
}
CEO.prototype.manage = function() {
    this.status = 'managing the intire company'
}

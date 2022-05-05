function Developer(name , email, socialSecurityNumber, id, birthDate) {
    Worker.call(this, name, email, socialSecurityNumber, id, birthDate)
}

Developer.prototype = Object.create(Worker.prototype)
Developer.prototype.constructor = Developer




// Developer.prototype.work = function(work) {
//     this.status = 'working'
// }

// Developer.prototype.break = function() {
//     this.status = 'pause'
// }

Developer.prototype.code = function() {
    this.status = 'coding'
}

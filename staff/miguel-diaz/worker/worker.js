function Worker(name, email, socialSecurityNumber, id, birthDate) {
    this.name = name
    this.email = email
    this.socialSecurityNumber = socialSecurityNumber
    this.birthDate = birthDate
    this.id = id
    this.birthDate = birthDate
    this.status = 'pause'
} 


Worker.prototype.work = function() {
    this.status = 'working'
}

Worker.prototype.break = function() {
    this.status = 'pause'
}

// Worker.prototype.name = function(name) {
//     this.name.name(name)
// }

// Worker.prototype.email = function(email) {
//     this.name.email(email)
// }

// Worker.prototype.socialSecutiryNumber = function(socialSecurityNumber) {
//     this.socialSecurityNumber.socialSecurityNumber(socialSecurityNumber)    
// }

// Worker.prototype.id = function(id) {
//     this.id.id(id)
// }

// Worker.prototype.birthDate = function(birthDate) {
//     this.birthDate.birthDate(birthDate)
// }
// Worker.prototype.birthDate = function(birthDate) {
//     this.birthDate.birthDate()
// }

Worker.prototype.work = function() {
    this.status = 'working'
}

Worker.prototype.break = function() {
    this.status = 'pause'
}


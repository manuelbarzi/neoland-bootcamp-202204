function FullStackDeveloper(name, email, socialSecurityNumber, id, birthDate) {
	// this.name = name
	// this.email = email
	// this.socialSecurityNumber = socialSecurityNumber
	// this.id = id
	// this.birthDate = birthDate
	// this.status = 'pause'
	Developer.call(this, name, email, socialSecurityNumber, id, birthDate)  
}

FullStackDeveloper.prototype = Object.create(Developer.prototype)
FullStackDeveloper.prototype.constructor = FullStackDeveloper

FullStackDeveloper.prototype.code = function() { // method overriding
	this.status = 'coding full stack'
}
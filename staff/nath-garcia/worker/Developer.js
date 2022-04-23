function Developer(name, email,socialSecurityNumber, id, birthDate){
   // this.name = name;
   // this.email = email;
   // this.socialSecurityNumber = socialSecurityNumber
   // this.id = id;
   // this.birthDate = birthDate
   // this.status = 'pause'
   Worker.call(this, name, email, socialSecurityNumber, id, birthDate)
}


Developer.prototype = Object.create(Worker.prototype)
Developer.prototype.constructor = Developer

/*Developer.prototype.work= function(){ //esto lo hereda del worker 
    this.status = 'working'                         
}

Developer.prototype.break= function(){//tmabién lo hereda
    this.status = 'pause'
}*/

Developer.prototype.code= function(){
    this.status = 'coding'
}




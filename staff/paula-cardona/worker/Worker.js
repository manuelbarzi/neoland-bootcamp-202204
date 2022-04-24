function Worker(name, email, SEC, id, birthDate) { //variable que se llama name, var email... que pasaré por la función
    this.name = name
    this.email = email
    this.socialSecurityNumber = SEC
    this.id = id 
    this.birthDate = birthDate
    this.status = 'pause'  //work no lo ponemos con las variables ya que se queda fijo para todos los trabajadores. si quisiera darle un valor a cada una entonces en variables y en parametros WORKER
}//debe cumplir al menos esta parte

//lo que me llega le llamo de una forma que se guardara en la propiedad. Como SEC se guarda en socialSecurityNumber

Worker.prototype.work= function(){
    this.status= 'working'

}

Worker.prototype.break= function(){
    this.status= 'pause'
}
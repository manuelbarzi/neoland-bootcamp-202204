function Developer(name, email, SEC, id, birthDate) {
    // this.name = name
    // this.email = email
    // this.socialSecurityNumber = SEC
    // this.id = id
    // this.birthDate = birthDate
    // this.status = 'pause'

    Worker.call(this, name, email, SEC, id, birthDate)
    //ejecuta worker como funcion y a este objeto (this) pasale todas las propiedades a continuacion
}

// hacer que developer extienda de worker
// developer es un nuevo objeto creado a partir de worker
Developer.prototype = Object.create(Worker.prototype) // creo un constructor de worker
Developer.prototype.constructor = Developer // se lo pongo a developer
// solo sirve para heredar la funciones/metodos, pero NO sus propiedades


Developer.prototype.code = function (){
    this.status = 'coding'
}






// programacion orientada a objetos
// las propiedades estan definidas, no se pueden añadir ni eliminar
// solo se pueden cambiar


// molde y objeto hereda las propiedades del molde
// h= new human // h es el objeto, human es el molde
// si cambias prototipo de molde cambia para todos los objetos
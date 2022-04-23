function FullStackDeveloper(name, email, SEC, id, birthDate) {
/*     this.name = name
    this.email = email
    this.socialSecurityNumber = SEC
    this.id = id
    this.birthDate = birthDate
    this.status = 'pause' */
    Worker.call(this, name, email, SEC, id, birthDate)
}

// hacer que developer extienda de worker
// developer es un nuevo objeto creado a partir de worker
FullStackDeveloper.prototype = Object.create(Developer.prototype) // creo un constructor de worker
FullStackDeveloper.prototype.constructor = FullStackDeveloper // se lo pongo a developer
// solo sirve para heredar la funciones/metodos, pero NO sus propiedades


FullStackDeveloper.prototype.code = function (){
    this.status = 'coding full stack'
}






// programacion orientada a objetos
// las propiedades estan definidas, no se pueden añadir ni eliminar
// solo se pueden cambiar


// molde y objeto hereda las propiedades del molde
// h= new human // h es el objeto, human es el molde
// si cambias prototipo de molde cambia para todos los objetos
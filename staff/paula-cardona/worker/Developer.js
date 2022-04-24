function Developer(name, email, SEC, id, birthDate) { //variable que se llama name, var email... que pasaré por la función
    this.name = name
    this.email = email
    this.socialSecurityNumber = SEC
    this.id = id 
    this.birthDate = birthDate
    this.status = 'pause'
}

//** creamos un tipo nuevo con referencia al otro tipo(worker)
//tenemos que encadenar Developer como objeto creado a partir del prototipo de Worker
/*object create: como llamar al constructor sin llamar su body. te crea instancia de worker
pero no tellama a worker, porque tendria sus caracteristicas, sino que el objeto tendra sus propias propiedades
también hereda los métodos del worker. Es un objeto plano, que al crear una función por 
defecto ya te lo pone como objeto plano vació para que pueda ponerle propiedades
en developer como esta enlazado con worker cuando hagamos una función no la tendrá
vacía y nueva por defecto sino que tendra las que le hayamos puesto al worker*/

Developer.prototype = Object.create(Worker.prototype) //forzar prototipo nuevo. defino prototipo developer a partir de los métodos de worker
Developer.prototype.constructor=Developer //enlaza constructor


/*developer.__proto__. para ver de cual viene
developer viene de worker, worker viene de object, object viene de  su object. object viene de null
object al ser algo tambien tiene prototipos o={}*/

Developer.prototype.code=function(){
    this.status='coding' //no lo pongo en parametros this.coding porque forma parte del status
}

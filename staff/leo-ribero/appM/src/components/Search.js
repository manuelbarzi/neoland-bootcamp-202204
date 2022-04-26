function Search() {
    Component.call(this, `<form class="Search">
    <input type="text" name="query" placeholder="escribe tu búsqueda">
    <button>Search</button>
</form>`)
}

chainPrototypes(Component, Search)


/*
Creamos la función "onSubmit()" que tiene un "callback" cuya 
funcionalidad, la del callback, se la daremos en el index.js

Aquí establecemos que ese callback se ejecuta cuando cumpla la 
condición que en este caso es un Evento 'submit'

Siguiente paso: queremos que el valor se guarde en la constante
que hemos declarado. 

Siempre que tengamos el submit, se tiene que poner el "preventDefault"
*/

Search.prototype.onSubmit = function(callback){
    this.container.addEventListener('submit', function(event){
        event.preventDefault()
        
        const query = this.query.value
        //al crear el <input> le dimos un name="query"
        // este recogerá lo que escriba el usuario en search

        callback(query)
    })
}



// Search.prototype.onSubmit = function(callback) {
//     this.container.addEventListener('submit', function(event) {
//         event.preventDefault()

//         const query = this.query.value

//         callback(query)
//     })
// }
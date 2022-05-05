function Search() {   // Declaramoscon su contenido  
    Component.call(this, `<form class="Search">
        <input type="text" name="query">
        <button>Search</button>
    </form>`)
}

chainPrototypes(Component, Search)  /// --------> Asignamos la Herencia Padre, Hijo





Search.prototype.onSubmit = function(callback){

    this.container.addEventListener('submit', function(event) {  // en caso de click sobre submit
        event.preventDefault()
        
        const query = this.query.value // me guardo los datos de la casilla query
        callback(query) // y ejecuta la funcion callback con lo que recoge de la casilla
    })

}
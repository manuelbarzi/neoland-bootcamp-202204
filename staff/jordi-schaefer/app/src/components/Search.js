function Search() {
    Component.call(this, `<form class="Search">
        <input type="text" name="query">
        <button>Search</button>
    </form>`)
}

chainPrototypes(Component, Search)



Search.prototype.onSubmit = function(callback){

    // en caso de click sobre submit
    this.container.addEventListener('submit', function(event) {
        event.preventDefault()
        
        const query = this.query.value
        // y ejecuta la funcion callback con lo que recoge de la casilla
        callback(query)
    })

}
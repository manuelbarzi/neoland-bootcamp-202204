function Search() {
    Component.call(this, `<form class="Search">
        <input type="text" name="query">
        <button>Search</button>
    </form>`)
}

chainPrototypes(Component, Search)



Search.prototype.onSubmit = function(callback){ //es la query

    // en caso de click sobre submit
    this.container.addEventListener('submit', function(event) { //al addevent listener al ser un metodo le paso como parametros el submit i la funcion de event
        event.preventDefault()
        
        const query = this.query.value//al addevent listener al ser un metodo le paso como parametros el submit i la funcion de event

        // y ejecuta la funcion callback con lo que recoge de la casilla
        callback(query)
    })

}
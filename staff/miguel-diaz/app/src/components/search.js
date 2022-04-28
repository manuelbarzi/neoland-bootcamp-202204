function Search() {
    Component.call(this, `<form class="Search">
        <input type="text" name="query">
        <button>Search</button>
        </form>`)
}

chainPrototypes(Component, Search)

Search.prototype.onSubmit = function (callback) {
    this.container.addEventListener('submit', function(event) {
        event.preventDefault()

        const query = this.query.value
        
        callback(query)
    })
}
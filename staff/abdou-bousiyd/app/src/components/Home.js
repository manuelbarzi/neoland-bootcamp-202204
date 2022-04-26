function Home() {
    Component.call(this, `<div class="Home">
        <h2>Hello, Home!</h2>

        <form>
            <input type="text" name="query">
            <button>Search</button>
        </form>

        <ul></ul>
    </div>`)
}

chainPrototypes(Component, Home)

Home.prototype.setName = function(name) {
    const title = this.container.querySelector('h2')
    title.innerText = `Hello, ${name}`
}


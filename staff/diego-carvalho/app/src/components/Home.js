function Home() {//Home with attributes
    Component.call(this, `<div class="Home">
        <h2>Hello, Home!</h2>

        <form>
            <input type="text" name="query">
            <button>Seach</button>
        </form>

        <ul></ul>
    </div>`)
}
//calling the chainprototype with parent(Component) and child(Home)
chainPrototypes(Component, Home)

//function with setName method to print out the user name on the home page.
Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')


    title.innerText = `Hello, ${name}!`
}


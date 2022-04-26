
//  CONTENIDO DEL HOME + EL COMPORTAMIENTO
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
// FUNCION para recojer el nombre por un queryselector y saludar
Home.prototype.setName = function(name) {
    const title = this.container.querySelector('h2')

    //title.innerText = 'Hello, ' + name + '!' concatenamos el hello con su nombre recogido por el TODO
    title.innerText = `Hello, ${name}!` 
}

// add news search (it shows news results (li's inside ul) and allow to click on them)

Home.prototype.Searchbutton = function (callback) {
    const a = this.container.querySelector('submit')

    button.addEventListener('submit', function (event){
        event.preventDefault()
        

    })

}

query = 'Van'
newspapers.filter(newspaper => newspaper.name.includes(query))
//[{…}]0: {name: 'La Vanguardia', url: 'https://lavanguardia.com'}length: 1[[Prototype]]: Array(0)
query = 'El'
newspapers.filter(newspaper => newspaper.name.includes(query))
//(3) [{…}, {…}, {…}]0: {name: 'El Diario', url: 'https://eldiario.es'}1: {name: 'El Mundo', url: 'https://elmundo.es'}2: {name: 'El Pais', url: 'https://elpais.com'}length: 3[[Prototype]]: Array(0)

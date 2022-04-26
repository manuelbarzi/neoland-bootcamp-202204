function Home() {
    Component.call(this, `<div class="Home">
        <h2>Hello, Home!</h2>
    </div>`)
    /*

    */
    const search = new Search

    let results

    search.onSubmit(function(query) {
        const newspaperResults = newspapers.filter(newspaper => newspaper.name.toLowerCase().includes(query.toLowerCase()))

        if (results)
            //results.removeFrom(this)
            this.remove(results)

        results = new Results

        results.container.innerHTML = ''
    
        newspaperResults.forEach(result => {
            const li = document.createElement('li')
    
            const a = document.createElement('a')
            a.innerText = result.name
            a.href = result.url
            a.target = '_blank'
    
            li.appendChild(a)
    
            results.container.appendChild(li)
        })

        this.add(results) //aquí estamos añadiendo results.js
    }.bind(this))
    /*
    this es el contexto en el momento de ejecución. En este momento es Search.
    click es el contexto de ejecución. Cuando haces click ya ha pasado
    bind es te doy el contexto de ejecución del momento

    */

    this.add(search)
}

chainPrototypes(Component, Home)

Home.prototype.setName = function(name) {
    const title = this.container.querySelector('h2')

    title.innerText = `Hello, ${name}!`
}
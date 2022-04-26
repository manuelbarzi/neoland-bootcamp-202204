function Home() {
    Component.call(this, `<div class="home"Home">
        <h2>Hello, World!</h2>
        </div>`)

    const search = new Search

    let results

    search.onSubmit(function (query) {
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

        this.add(results)
    }.bind(this))

    this.add(search)
}

chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')

    //title.innerText = `Hello, ' + name + '!`
    title.innerText = `Hello, ${name}!`
}

// TODO add news search (it shows news results (li's inside ul) and allow to click on them)


/*
query = 'Van'

newspapers.filter(newspaper => newspaper.name.includes(query))
//[{…}]0: {name: 'La Vanguardia', url: 'https://lavanguardia.com'}length: 1[[Prototype]]: Array(0)

query = 'El'

newspapers.filter(newspaper => newspaper.name.includes(query))
//(3) [{…}, {…}, {…}]0: {name: 'El Diario', url: 'https://eldiario.es'}1: {name: 'El Mundo', url: 'https://elmundo.es'}2: {name: 'El Pais', url: 'https://elpais.com'}length: 3[[Prototype]]: Array(0)
*/
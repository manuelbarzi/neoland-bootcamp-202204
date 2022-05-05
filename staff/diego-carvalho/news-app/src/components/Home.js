function Home() {//constructor Home with attributes
    Component.call(this, `<div class="Home">
        <h2>Hello, Home!</h2>
    </div>`)

    const search = new Search

    let results 
 
    search.onSubmit(function (query) {
       
        const newspaperResults = newspapers.filter(newspaper => newspaper.name.toLowerCase().includes(query.toLowerCase()))

        if (results)

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
//vizualization part

//calling the chainprototype with parent(Component) and child(Home)
chainPrototypes(Component, Home)

//function with setName method to print out the user name on the home page.
Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')

    title.innerText = `Hello, ${name}!`
}


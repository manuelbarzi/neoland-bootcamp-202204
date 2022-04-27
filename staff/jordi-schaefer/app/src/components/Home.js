function Home() {
    Component.call(this, `<div class="Home">
        <h2>Hello, Home!</h2>
    </div>`)

    
    // genero el bloque search
    const search = new Search()
    this.add(search)

    let results

    // le doy la funcion a submit
    search.onSubmit (function(query) {
        const newspaperResults = newspapers.filter(newspaper => newspaper.name.toLowerCase().includes(query.toLowerCase()))
        // guardo dentro de esta variable, todos los elementos que contienen el query

        if(results)               // si hay resultados (de antes)
            this.remove(results)  // los borro
        
        results = new Results()   // genero nueva pantalla de resultados
        results.container.innerHTML = '' // crear la propiedad container dentro del objeto results, para luego poder llenar


        // y lo relleno con los resultados
        newspaperResults.forEach(result => {  // para cada elemento encontrado antes
            const li = document.createElement('li') // crea un elemento li
    
            const a = document.createElement('a') // crea un link anchor
            a.innerText = result.name  // le da nombre visible a la porpiedad    
            a.href = result.url   // le da enlace al nombre
            a.target = '_blank'  // abre el anchor en una pestaña nueva
    
            li.appendChild(a)
    
            results.container.appendChild(li)  // y se lo añade al container results
        })

        this.add(results) // añado todo el paquete results a search
    }.bind(this))


}

chainPrototypes(Component, Home)

Home.prototype.setName = function(name) {
    const title = this.container.querySelector('h2')

    //title.innerText = 'Hello, ' + name + '!'
    title.innerText = `Hello, ${name}!`
}

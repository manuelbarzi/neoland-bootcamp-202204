
//  CONTENIDO DEL HOME + EL COMPORTAMIENTO
function Home() {
    Component.call(this, `<div class="Home">
        <h2>Hello,Home!</h2>
        <ul></ul>
    </div>`)

    const search = new Search // genero el bloque search
    

    
    let results

    search.onSubmit (function(query) {
        const newspaperResults = newspapers.filter(newspaper => newspaper.name.toLowerCase().includes(query.toLowerCase()))
        // guardo dentro de esta variable, todos los elementos que contienen el query
        
        if(results)               // si hay resultados (de antes)
            this.remove(results)  // los borro 
        
        results = new Results()   // genero nueva pantalla de resultados
        results.container.innerHTML = '' // crear la propiedad container dentro del objeto results, para luego poder llenar

        
        // y lo relleno con los resultados
        
        newspaperResults.forEach(result => {  
            const li = document.createElement('li') //Creara un elemento li por cada elemento que encutre como resultado de la busqueda
    
            const a = document.createElement('a')  // Creara un elemento anchor por cada elemento encotrado
            a.innerText = result.name  // Muestra la propiedad name como vista a mostrar name:Pepito muestra Pepito 
            a.href = result.url // Enlaza el ancor a la pagina de cada elemento
            a.target = '_blank' // abre el anchor en una ventana nueva 
    
            li.appendChild(a) // Pinta a en en li 
    
            results.container.appendChild(li) // Pinta los resultados en li
        })

        this.add(results) //
    }.bind(this))
    this.add(search)


}

chainPrototypes(Component, Home)
// FUNCION para recojer el nombre por un queryselector y saludar
Home.prototype.setName = function(name) {
    const title = this.container.querySelector('h2')

    //title.innerText = 'Hello, ' + name + '!' concatenamos el hello con su nombre recogido por el TODO
    title.innerText = `Hello, ${name}!` 
}

// add news search (it shows news results (li's inside ul) and allow to click on them)



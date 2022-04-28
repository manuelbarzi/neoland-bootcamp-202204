function Component(template) { //creo un elemento div
    const temp = document.createElement('div')

    temp.innerHTML = template //le pongo el paquete html

    this.container = temp.firstChild //todo el paquete se lo pongo a una propiedad llamada paquete
}

//desde el compo tonto
Component.prototype.addTo = function(parent) {      //this, desde el objeto donde se llama
    parent.container.appendChild(this.container)
}
//este método sirve para añadir un compo tonto a una página desde el campo tonto.
//añador componente search a la página web
//home.container-appenChild(search.container)

Component.prototype.removeFrom = function(parent) {
    parent.container.removeChild(this.container)
}
//este método sirve para remove un compo tonto desde el mismo de una página.
//añador componente search a la página web
//home.container-appenChild(search.container)


//desde la página
Component.prototype.add = function(...children) {
    for (const child of children)
        this.container.appendChild(child.container)
}

Component.prototype.remove = function(...children) {
    for (const child of children)
        this.container.removeChild(child.container)
}


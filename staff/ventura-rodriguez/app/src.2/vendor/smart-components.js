console.log('%cSmart Components v1.2', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function Component(template) {
    const temp = document.createElement('div')

    temp.innerHTML = template

    this.container = temp.firstChild
}

Component.prototype.addTo = function(parent) {
    parent.container.appendChild(this.container)
}

// Este método sirve para añadir un compo tonto a una página desde el compo tonto

// home - search ===> añadir componente search a la página home
// home.addTo(search)
// search.addTo(home)
// home.container.appendChild(search.container)


Component.prototype.removeFrom = function(parent) {
    parent.container.removeChild(this.container)
}

// Este método sirve para remover un compo tonto desde él mismo de una página

// home - search ===> quiero eliminar serach de home
// search.removeFrom(home)
// home.container.removeChild(search.container)

Component.prototype.add = function(...children) {
    for (const child of children)
        this.container.appendChild(child.container)
}

// Este método sirve para añadir desde la página un compo tonto

// home -serach ===> añadir el compo search a la página home
// home.add(search)
// home.container.appendChild(search.container)

Component.prototype.remove = function(...children) {
    for (const child of children)
        this.container.removeChild(child.container)
}
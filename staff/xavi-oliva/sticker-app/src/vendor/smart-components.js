console.log('%cSmart Components v1.1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

// para la creación de containers
function Component(template) {
    const temp = document.createElement('div')

    temp.innerHTML = template

    this.container = temp.firstChild
}
// método para añadir compo a página desde el compo
Component.prototype.addTo = function(parent) {
    parent.container.appendChild(this.container)
}

// método para eliminar compo de página desde el compo
Component.prototype.removeFrom = function(parent) {
    parent.container.removeChild(this.container)
}

// método para añadir compo a página desde página
Component.prototype.add = function(...children) {
    for (const child of children)
        this.container.appendChild(child.container)
}

// método para eliminar compo de página desde página
Component.prototype.remove = function(...children) {
    for (const child of children)
        this.container.removeChild(child.container)
}
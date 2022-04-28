
function Component(template) {
    // creo un elemento div
    const temp = document.createElement('div')

    // dentro del div le pongo el paquete html
    temp.innerHTML = template

    // todo el paquete se lo pongo a una propiedad llamada container
    this.container = temp.firstChild

}


// Funcion para añadir y borrar  hijos sobre los que se aplica el motodo, del padre
// este metodo sirve para remover un compo tonto a una pagina desde el compo tonto
Component.prototype.addTo = function(parent) {
    parent.container.appendChild(this.container)
}
Component.prototype.removeFrom = function(parent) {
    parent.container.removeChild(this.container)
}


// Funciona para añadir hijos al padre sobre el que se aplica el metodo
// Este metodo sirve para añadir desde la pagina u compo tonto
Component.prototype.add = function(...children) {
    for (const child of children)
        this.container.appendChild(child.container)
}


Component.prototype.remove = function(...children) {
    for (const child of children)
        this.container.removeChild(child.container)
}

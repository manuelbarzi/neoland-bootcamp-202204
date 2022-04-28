console.log('%cSmart Components v1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function Component(template) {
    const temp = document.createElement('div')

    temp.innerHTML = template

    this.container = temp.firstChild
}




















/*



console.log('%cSmart Components v1.1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function Component(template) {
    const temp = document.createElement('div')

    temp.innerHTML = template

    this.container = temp.firstChild
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

*/
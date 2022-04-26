console.log('%cSmart Components v1.2', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function Component(template) {
    const temp = document.createElement('div')

    temp.innerHTML = template
    // AQUÍ le quitó el DIV
    this.container = temp.firstChild
}

Component.prototype.addTo = function(parent) {
    parent.container.appendChild(this.container)
}
//login.addTo(app)



Component.prototype.removeFrom = function(parent) {
    parent.container.removeChild(this.container)
}
//login.removeFrom(app)

Component.prototype.add = function(...children) {
    for (const child of children)
        this.container.appendChild(child.container)
}
/*
Es un método que se llama desde el padre y permite N parámetros
que son elementos html
*/
//app.add(helloWorld, home)

Component.prototype.remove = function(...children) {
    for (const child of children)
        this.container.removeChild(child.container)
}
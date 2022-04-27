console.log('%cSmart Components v1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')
/* Template = todo lo que recibes -> innserHTML = inserta en el HTML --> 
this.container = itroducir todo lo que llege como 1º hijo - > pasa de ser strig a elemento HTML
sobre lo que le pase le creara la propiedad container
 */
function Component(template) {
    
    const temp = document.createElement('div')

    temp.innerHTML = template
    this.container = temp.firstChild

}

/* ------- ***  Funciona para añadir hijos al padre sobre el que se aplica el metodo  **  -------------
----------  ***   Estos dos metodo sirve para añadir/remover desde la pagina u compo tonto        *** ------------ */


Component.prototype.addTo = function(parent) {
    parent.container.appendChild(this.container)
}



Component.prototype.removeFrom = function(parent) {
    parent.container.removeChild(this.container)
}

/* ------- ***  Funciona para añadir Padre al -Hijo sobre el que se aplica el metodo  **  -------------
----------  ***   Estos dos metodo sirve para añadir/remover desde la pagina u compo tonto        *** ------------ */
Component.prototype.add = function(...children) {
    for (const child of children)
        this.container.appendChild(child.container)
}
 

Component.prototype.remove = function(...children) {
    for (const child of children)
        this.container.removeChild(child.container)
}

console.log('%cSmart Components v1.3', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

class Component { //creo un elemento div
    constructor(template){
        const temp = document.createElement('div')

        temp.innerHTML = template //le pongo el paquete html

        this.container = temp.firstChild //todo el paquete se lo pongo a una propiedad llamada paquete
    }

   //desde el compo tonto
    addTo(parent) {      //this, desde el objeto donde se llama
        parent.container.appendChild(this.container)
    }
    //este método sirve para añadir un compo tonto a una página desde el campo tonto.
    //añador componente search a la página web
    //home.container-appenChild(search.container)

    removeFrom (parent) {
        parent.container.removeChild(this.container)
    }
    //este método sirve para remove un compo tonto desde el mismo de una página.
    //añador componente search a la página web
    //home.container-appenChild(search.container)


    //desde la página
    add(...children) {
        for (const child of children)
            this.container.appendChild(child.container)
    }

    remove(...children) {
        for (const child of children)
            this.container.removeChild(child.container)
    }

    has(child) {
        return this.container.hasChild(child.container)
    } //verifica si el componente de la función existe dentro del componente padre
}
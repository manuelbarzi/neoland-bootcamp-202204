console.log('%cSmart Components v1.1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

// para la creación de containers
class Component{
    constructor(template) {
        const temp = document.createElement('div')
    
        temp.innerHTML = template
    
        this.container = temp.firstChild
    }
    
    // método para añadir compo a página desde el compo
    addTo(parent) {
        parent.container.appendChild(this.container)
    }
    
    // método para eliminar compo de página desde el compo
    removeFrom(parent) {
        parent.container.removeChild(this.container)
    }
    
    // método para añadir compo a página desde página
    add(...children) {
        for (const child of children)
            this.container.appendChild(child.container)
    }
    
    // método para eliminar compo de página desde página
    remove(...children) {
        for (const child of children)
                this.container.removeChild(child.container)
    }
    
    //a partir del Polyfill creado, método para indicar si un componente tiene hijo
    has(child) {
        return this.container.hasChild(child.container)
    }
} 
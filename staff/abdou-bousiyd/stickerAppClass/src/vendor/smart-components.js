console.log('%cSmart Components v1.3', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

class Component {
    constructor (template) {
        const temp = document.createElement('div')

        temp.innerHTML = template

        this.container = temp.firstChild
    }

addTo(parent) {
    parent.container.appendChild(this.container)
}

removeFrom(parent) {
    parent.container.removeChild(this.container)
}

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
}
}
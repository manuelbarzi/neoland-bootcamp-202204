console.log('%cSmart Components v1.1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function Component(template) {
    const temp = document.createElement('div')

    temp.innerHTML = template

    this.container = temp.firstChild
}

Component.prototype.addTo = function(parent) {
    parent.container.appendChild(this.container)
}

Component.prototype.removeFrom = function(parent) {
    parent.container.removeChild(this.container)
}

// Component.prototype.add = function(child) {
//     this.container.appendChild(child.container)
// }
Component.prototype.add = function(...children) {
    for (const child of children)
        this.container.appendChild(child.container)
}
//library 
console.log('%cSmart Components v1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function Component(template) {
    const temp = document.createElement('div')

    temp.innerHTML = template

    this.container = temp.firstChild
}
//method that add the compo (child) to parent (page) from child.
Component.prototype.addTo = function (parent) {
    parent.container.appendChild(this.container)
}
//method that remove the compo (child) from parent (page) by the compo
Component.prototype.removeFrom = function (parent) {
    parent.container.removeChild(this.container)
}
//method that add compo (child) to parent by the parent.
Component.prototype.add = function (...children) {
    for (const child of children)
        this.container.appendChild(child.container)

}
//method that remove compo (child) in the parent (page) by the parent
Component.prototype.remove = function (...children) {
    for (const child of children)
        this.container.removeChild(child.container)
}
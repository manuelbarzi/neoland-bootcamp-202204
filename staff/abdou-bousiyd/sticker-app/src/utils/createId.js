// function chainPrototypes(parent, child) {
//     child.prototype = Object.create(parent.prototype)
//     child.prototype.constructor = child
// }

// function createId() {
//     return (Math.random() + Date.now()).toFixed(10)
// }

function createId() {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
}
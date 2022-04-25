function chainPrototypes(parent, child) { //le pasamos el padre que es Component (div roo) ,  y el hijo que es h1 hola mundo
    
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

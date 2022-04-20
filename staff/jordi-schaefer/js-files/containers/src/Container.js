// cuando algo se usa para construir se le pone mayuscula

function Container(width, height, depth, status='close'){
    this.width = width
    this.height = height
    this.depth = depth
    this.status = status
}

Container.prototype.open = function() {
    this.status = "open"
}

Container.prototype.close = function() {
    this.status = "close"
}

Container.prototype.doble =function() {
    this.width = this.width*2
    this.height = this.height*2
    this.depth = this.depth*2
}

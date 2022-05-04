function Container (width, height, depth, status='🔒'){ //cuando se contruye algo se pone en mayúsculas
    this.width = width
    this.height = height
    this.depth = depth
    this.status = status
    
}

Container.prototype.open = function(){
    this.status= '🔓'
}

Container.prototype.close = function(){
    this.status= '🔒'

}


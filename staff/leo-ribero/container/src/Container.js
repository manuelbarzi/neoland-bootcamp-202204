function Container(width, height, depth, status) {// cuando se construy algo se pone en mayusculas
    this.width = width
    this.height = height
    this.depth = depth
    this.status ='🔒'
    // this.status = 'abierto' 
    // TODO
}

// Hacer una funcion que se llame " open " que cambie el status de cerrado a abierto

Container.prototype.open = function(){
    this.status='🔒'
} 

Container.prototype.close = function(){
    this.status='🔒'
} 


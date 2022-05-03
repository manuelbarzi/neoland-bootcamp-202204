function Container(width, height, depth) {
    // Atributos
    this.status = '🔒';
    this.width = width;
    this.height = height; 
    this.depth = depth;
}

// Metodos

Container.prototype.open = function() {
    this.status = '🔓'
}

Container.prototype.close = function() {
    this.status = '🔒';
}
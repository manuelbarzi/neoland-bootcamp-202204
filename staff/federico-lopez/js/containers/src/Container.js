function Container(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.situation = '🔒';
}

Container.prototype.open = function() {
    this.situation = '🔓';
}

Container.prototype.close = function() {
    this.situation = '🔒';
}
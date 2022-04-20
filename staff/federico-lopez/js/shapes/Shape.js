function Shape(color, sideWidth) {
    this.color = color
    this.sideWidth = sideWidth
}

Shape.prototype.perimeter = function() {
    return this.sides.reduce((acc, side) => acc + side)
}
function Square(sideLength){
    this.sides = [sideLength, sideLength, sideLength, sideLength]
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.getArea = function() {
    return this.sides[0] ** 2
}


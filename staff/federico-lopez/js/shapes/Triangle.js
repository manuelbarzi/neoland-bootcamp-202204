function Triangle(side1, side2) {

    this.sides = [side1, side2, this.getHypotenuse(side1, side2)]
    
}

Triangle.prototype = Object.create(Shape.prototype)
Triangle.prototype.constructor = Triangle

Triangle.prototype.getHypotenuse = function(side1, side2) {
    return Math.sqrt(side1**2 + side2**2)
}
describe('Shape', () => {

    it('Shape', () => {

        const firstShape = new Shape('blue', 2)

        expect(firstShape instanceof Shape).toBe(true)
        expect(firstShape.color).toBe('blue')

    })

    it('triangle', () => {

        const firstTriangle = new Triangle(1, 1)

        expect(firstTriangle instanceof Shape).toBe(true)
        expect(firstTriangle instanceof Triangle).toBe(true)

        expect(firstTriangle.sides[2]).toBe(Math.sqrt(2))

        expect(firstTriangle.perimeter()).toBe(1+1+Math.sqrt(2))

    })

    it('square', () => {

        const firstSquare = new Square(2);

        expect(firstSquare instanceof Shape).toBe(true)
        expect(firstSquare instanceof Square).toBe(true)

        expect(firstSquare.getArea()).toBe(4)

        expect(firstSquare.perimeter()).toBe(8)
    })

    

})
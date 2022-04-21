describe('indexOf', function() {
    test('returns first index', function(){

        const fruits = ["melon", "fresa", "sandia", "manzana","melocoton"]
        const firstFruit = indexOf(fruits, "sandia")
        const theresNot = indexOf(fruits, "aguacate")
        const positionFruit = indexOf(fruits, "manzana", -2)

        expect(firstFruit).toBe(2)
        expect(theresNot).toBe(-1)
        expect(positionFruit).toBe(3)

    })
})


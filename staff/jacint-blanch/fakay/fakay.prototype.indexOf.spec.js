describe('indexOf', function() {

    it('returns positive and negative index', function(){

        const fruits = new Fakay("melon", "fresa", "sandia", "manzana","melocoton")
        const firstFruit = fruits.indexOf("sandia")
        const theresNot = fruits.indexOf("aguacate")
        const positionFruit = fruits.indexOf("manzana", -2)

        expect(firstFruit).toBe(2)
        expect(theresNot).toBe(-1)
        expect(positionFruit).toBe(3)
        
    })
})
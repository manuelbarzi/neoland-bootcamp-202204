describe('Fakay.prototype.filter', function () {

    it('Creates a new instance with all elements that pass the test implemented by the provided function. Element > 4', function () {
        
        const nums = new Fakay (8, 3, 6, 4, 12, 9, 2, 1, 13, 3, 4)
    
        const result = nums.filter(function (elem) { 
            return elem > 4
        })

        expect(result[0]).toBe(8)
        expect(result[1]).toBe(6)
        expect(result[2]).toBe(12)
        expect(result[3]).toBe(9)
        expect(result[4]).toBe(13)

    })

    it('Creates a new array with all elements that pass the test implemented by the provided function. word.length > 6', function () {
        
        const words = new Fakay ('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')

        const result = words.filter((word) => word.length > 6);

        const expected = new Fakay('exuberant', 'destruction', 'present')

        expect(result).toBeInstanceOf(Fakay)
        // expect(result.length === expected.length).toBe(true)
        expect(result.length).toBe(expected.length)
        
        //for (let i = 0; i < expected.length; i++)
        //    expect(result[i]).toBe(expected[i])
        expect(result).toEqual(expected)

    })

    it('Creates a new array with all elements that pass the test implemented by the provided function. Element % 2 === 0', function () {
        
        const num2 = new Fakay (8, 3, 6, 4, 12, 9, 2, 1, 13, 3, 4)
        
        const result = num2.filter(function (elem) { 
            return elem % 2 === 0
        })

        expect(result[0]).toBe(8)
        expect(result[1]).toBe(6)
        expect(result[2]).toBe(4)
        expect(result[3]).toBe(12)
        expect(result[4]).toBe(2)
        expect(result[5]).toBe(4)        

    })

    it('returns empty instance on non-matching words longer than 20', () => {
        const words = new Fakay('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')

        const result = words.filter(word => word.length > 20);

        const expected = new Fakay

        expect(result).toBeInstanceOf(Fakay)
        expect(result.length).toBe(expected.length)
    })

})
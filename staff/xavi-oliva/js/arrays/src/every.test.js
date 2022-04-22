describe('every', function () {
    
    test('returns true if all elements match callback condition', function () {
        
        const array1 = [1, 30, 39, 29, 10, 13];
        
        const isBelowThreshold = every(array1, function (currentValue) {
            if (currentValue < 40)
                return true
        })

        expect(isBelowThreshold).toBe(true)

    })

    test('returns false if all elements does not match callback condition', function () {
        
        const array1 = [1, 30, 39, 29, 10, 13, 42];
        
        const isBelowThreshold = every(array1, function (currentValue) {
            if (currentValue < 40)
                return true
        })

        expect(isBelowThreshold).toBe(false)

    })
})
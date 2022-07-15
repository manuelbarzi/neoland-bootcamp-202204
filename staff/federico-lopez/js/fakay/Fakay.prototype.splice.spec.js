describe('Fakay.prototype.splice', () => {

    it('should add one element', () => {

        const months = new Fakay('Jan', 'March', 'April', 'June')
        
        const result = months.splice(1, 0, 'Feb')
        
        const expectedMonths = new Fakay('Jan', 'Feb', 'March', 'April', 'June')
        
        const expectedResult = new Fakay
        
        expect(expectedResult).toEqual(result)
        expect(expectedMonths).toEqual(months)

    })

    it('should add one element and delete one element', () => {

        const months = new Fakay('Jan', 'Feb', 'March', 'April', 'June')
        
        const result = months.splice(4, 1, 'May')
        
        const expectedMonths = new Fakay('Jan', 'Feb', 'March', 'April', 'May')
        
        const expectedResult = new Fakay('June')

        expect(expectedResult).toEqual(result)
        expect(expectedMonths).toEqual(months)

    })

    it('should add one element, no deleting', () => {

        const myFish = new Fakay('angel', 'clown', 'mandarin', 'sturgeon')
        
        const result = myFish.splice(2, 0, 'drum')
        
        const expectedFish = new Fakay('angel', 'clown', 'drum', 'mandarin', 'sturgeon')
        
        const expectedResult = new Fakay

        expect(expectedResult).toEqual(result)
        expect(expectedFish).toEqual(myFish)

    })

    it('should add two elements, no deleting', () => {

        const myFish = new Fakay('angel', 'clown', 'mandarin', 'sturgeon')
        
        const result = myFish.splice(2, 0, 'drum', 'guitar')
        
        const expectedFish = new Fakay('angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon')
        
        const expectedResult = new Fakay

        expect(expectedResult).toEqual(result)
        expect(expectedFish).toEqual(myFish)

    })

    it('should delete one element without deleting', () => {

        const myFish = new Fakay('angel', 'clown', 'drum', 'mandarin', 'sturgeon')
        
        const result = myFish.splice(3, 1)
        
        const expectedFish = new Fakay('angel', 'clown', 'drum', 'sturgeon')
        
        const expectedResult = new Fakay('mandarin')

        expect(expectedResult).toEqual(result)
        expect(expectedFish).toEqual(myFish)

    })

    it('should add one element and delete one element', () => {

        const myFish = new Fakay('angel', 'clown', 'drum', 'sturgeon')
        
        const result = myFish.splice(2, 1, 'trumpet')
        
        const expectedFish = new Fakay('angel', 'clown', 'trumpet', 'sturgeon')
        
        const expectedResult = new Fakay('drum')

        expect(expectedResult).toEqual(result)
        expect(expectedFish).toEqual(myFish)

    })

    it('should add three elements and delete two elements', () => {

        const myFish = new Fakay('angel', 'clown', 'trumpet', 'sturgeon')
        
        const result = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')
        
        const expectedFish = new Fakay('parrot', 'anemone', 'blue', 'trumpet', 'sturgeon')
        
        const expectedResult = new Fakay('angel', 'clown')

        expect(expectedResult).toEqual(result)
        expect(expectedFish).toEqual(myFish)

    })

    it('should only delete two elements', () => {

        const myFish = new Fakay('parrot', 'anemone', 'blue', 'trumpet', 'sturgeon')
        
        const result = myFish.splice(2, 2)
        
        const expectedFish = new Fakay('parrot', 'anemone', 'sturgeon')
        
        const expectedResult = new Fakay('blue', 'trumpet')

        expect(expectedResult).toEqual(result)
        expect(expectedFish).toEqual(myFish)

    })

    it('should work with negative index', () => {

        const myFish = new Fakay('angel', 'clown', 'mandarin', 'sturgeon')
        
        const result = myFish.splice(-2, 1)
        
        const expectedFish = new Fakay('angel', 'clown', 'sturgeon')
        
        const expectedResult = new Fakay('mandarin')

        expect(expectedResult).toEqual(result)
        expect(expectedFish).toEqual(myFish)

    })

    it('should remove all elements, from index 2', () => {

        const myFish = new Fakay('angel', 'clown', 'mandarin', 'sturgeon')
        
        const result = myFish.splice(2)
        
        const expectedFish = new Fakay('angel', 'clown')
        
        const expectedResult = new Fakay('mandarin', 'sturgeon')

        expect(expectedResult).toEqual(result)
        expect(expectedFish).toEqual(myFish)

    })
})
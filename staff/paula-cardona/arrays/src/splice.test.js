//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

describe('splice', () => {
    test('inserts a Feb between Jan and March', () => {
        const months = ['Jan', 'March', 'April', 'June']

        const deletedElements = splice(months, 1, 0, 'Feb')

        const expectedMonths = ['Jan', 'Feb', 'March', 'April', 'June']

        const expectedDeletedElements = []

        expect(months).toEqual(expectedMonths)
        expect(deletedElements).toEqual(expectedDeletedElements)
    })

    test('replaces June by May', () => {
        const months = ['Jan', 'Feb', 'March', 'April', 'June']

        const deletedElements = splice(months, 4, 1, 'May')

        const expectedMonths = ['Jan', 'Feb', 'March', 'April', 'May']

        const expectedDeletedElements = ['June']

        expect(months).toEqual(expectedMonths)
        expect(deletedElements).toEqual(expectedDeletedElements)
    })

    test('inserts drum and guitar from index 2', () => {
        const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']

        const deletedElements = splice(myFish, 2, 0, 'drum', 'guitar')

        const expectedMyFish = ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']

        const expectedDeletedElements = []

        expect(myFish).toEqual(expectedMyFish)
        expect(deletedElements).toEqual(expectedDeletedElements)
    })

    test('delete one element -mandarin- from index 3', () => {
        const myFishAndOthers = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'shark', 'dolphin']

        const deletedElements = splice(myFishAndOthers, 3, 1)
        
        const expectedMyFishAndOthers = ['angel', 'clown', 'drum', 'sturgeon', 'shark', 'dolphin']
        
        const expectedDeletedElements = ['mandarin']

        expect(myFishAndOthers).toEqual(expectedMyFishAndOthers)
        expect(deletedElements).toEqual(expectedDeletedElements)
    })

    test('from index 0, delete 2 elements -angel and clown- and insert 3 elements -parrot, anemone and blue', () => {
        const myFish = ['angel', 'clown', 'trumpet', 'sturgeon']

        const deletedElements = splice(myFish, 1, 2, 'parrot', 'anemone', 'blue')

        const expectedMyFish = ['angel', 'parrot', 'anemone', 'blue', 'sturgeon']

        const expectedDeletedElements = ['clown', 'trumpet']

        expect(myFish).toEqual(expectedMyFish)
        expect(deletedElements).toEqual(expectedDeletedElements)
    })

})
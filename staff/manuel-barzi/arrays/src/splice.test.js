describe('splice', () => {
    test('inserts a Feb between Jan and March', () => {
        const months = ['Jan', 'March', 'April', 'June']

        const removedElements = splice(months, 1, 0, 'Feb')

        const expectedMonths = ['Jan', 'Feb', 'March', 'April', 'June']

        const expectedRemovedElements = []

        expect(months).toEqual(expectedMonths)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    test('replaces June by May', () => {
        const months = ['Jan', 'Feb', 'March', 'April', 'June']

        const removedElements = splice(months, 4, 1, 'May')

        const expectedMonths = ['Jan', 'Feb', 'March', 'April', 'May']

        const expectedRemovedElements = ['June']

        expect(months).toEqual(expectedMonths)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    test('inserts drum and guitar from index 2', () => {
        const fishes = ['angel', 'clown', 'mandarin', 'sturgeon']

        const removedElements = splice(fishes, 2, 0, 'drum', 'guitar')

        const expectedFishes = ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']

        const expectedRemovedElements = []

        expect(fishes).toEqual(expectedFishes)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    test('remove one element -mandarin- from index 3', () => {
        const fishesAndOthers = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'shark', 'dolphin']

        const removedElements = splice(fishesAndOthers, 3, 1)

        const expectedFishesAndOthers = ['angel', 'clown', 'drum', 'sturgeon', 'shark', 'dolphin']

        const expectedRemovedElements = ['mandarin']

        expect(fishesAndOthers).toEqual(expectedFishesAndOthers)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    test('from index 0, remove 2 elements -angel and clown- and insert 3 elements -parrot, anemone and blue', () => {
        const fishes = ['angel', 'clown', 'trumpet', 'sturgeon']

        const removedElements = splice(fishes, 1, 2, 'parrot', 'anemone', 'blue')

        const expectedFishes = ['angel', 'parrot', 'anemone', 'blue', 'sturgeon']

        const expectedRemovedElements = ['clown', 'trumpet']

        expect(fishes).toEqual(expectedFishes)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    test('remove 1 item -mandarin- from index -2', () => {
        const fishes = ['angel', 'clown', 'mandarin', 'sturgeon']

        const removedElements = splice(fishes, -2, 1)

        const expectedFishes = ['angel', 'clown', 'sturgeon']

        const expectedRemovedElements = ['mandarin']

        expect(fishes).toEqual(expectedFishes)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    test('remove all items from index 2 -mandarin and sturgeon-', () => {
        const fishes = ['angel', 'clown', 'mandarin', 'sturgeon']

        const removedElements = splice(fishes, 2)

        const expectedFishes = ['angel', 'clown']

        const expectedRemovedElements = ['mandarin', 'sturgeon']

        expect(fishes).toEqual(expectedFishes)
        expect(removedElements).toEqual(expectedRemovedElements)
    })
})
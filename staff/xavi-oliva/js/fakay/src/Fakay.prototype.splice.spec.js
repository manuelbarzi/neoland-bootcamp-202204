describe('Fakay.prototype.splice', () => {
    it('inserts a Feb between Jan and March', () => {
        const months = new Fakay('Jan', 'March', 'April', 'June')

        const removedElements = months.splice(1, 0, 'Feb')

        const expectedMonths = new Fakay('Jan', 'Feb', 'March', 'April', 'June')

        const expectedRemovedElements = new Fakay

        expect(months).toEqual(expectedMonths)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    it('replaces June by May', () => {
        const months = new Fakay('Jan', 'Feb', 'March', 'April', 'June')

        const removedElements = months.splice(4, 1, 'May')

        const expectedMonths = new Fakay('Jan', 'Feb', 'March', 'April', 'May')

        const expectedRemovedElements = new Fakay('June')

        expect(months).toEqual(expectedMonths)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    it('inserts drum and guitar from index 2', () => {
        const fishes = new Fakay('angel', 'clown', 'mandarin', 'sturgeon')

        const removedElements = fishes.splice(2, 0, 'drum', 'guitar')

        const expectedFishes = new Fakay('angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon')

        const expectedRemovedElements = new Fakay()

        expect(fishes).toEqual(expectedFishes)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    it('remove one element -mandarin- from index 3', () => {
        const fishesAndOthers = new Fakay('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'shark', 'dolphin')

        const removedElements = fishesAndOthers.splice(3, 1)

        const expectedFishesAndOthers = new Fakay('angel', 'clown', 'drum', 'sturgeon', 'shark', 'dolphin')

        const expectedRemovedElements = new Fakay('mandarin')

        expect(fishesAndOthers).toEqual(expectedFishesAndOthers)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    it('from index 0, remove 2 elements -angel and clown- and insert 3 elements -parrot, anemone and blue', () => {
        const fishes = new Fakay('angel', 'clown', 'trumpet', 'sturgeon')

        const removedElements = fishes.splice(1, 2, 'parrot', 'anemone', 'blue')

        const expectedFishes = new Fakay('angel', 'parrot', 'anemone', 'blue', 'sturgeon')

        const expectedRemovedElements = new Fakay('clown', 'trumpet')

        expect(fishes).toEqual(expectedFishes)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    it('remove 1 item -mandarin- from index -2', () => {
        const fishes = new Fakay('angel', 'clown', 'mandarin', 'sturgeon')

        const removedElements = fishes.splice(-2, 1)

        const expectedFishes = new Fakay('angel', 'clown', 'sturgeon')

        const expectedRemovedElements = new Fakay('mandarin')

        expect(fishes).toEqual(expectedFishes)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    it('remove all items from index 2 -mandarin and sturgeon-', () => {
        const fishes = new Fakay('angel', 'clown', 'mandarin', 'sturgeon')

        const removedElements = fishes.splice(2)

        const expectedFishes = new Fakay('angel', 'clown')

        const expectedRemovedElements = new Fakay('mandarin', 'sturgeon')

        expect(fishes).toEqual(expectedFishes)
        expect(removedElements).toEqual(expectedRemovedElements)
    })
})
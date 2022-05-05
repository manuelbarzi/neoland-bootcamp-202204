describe('Fakay.prototype.includes', function () {

    it('looking for 2 inside of obj', function () {
        const obj = new Fakay (2, 3, 4)

        expect(obj.includes(2)).toBe(true)

    })
    it('looking cat inside pets', function () {
        const pets = new Fakay ('cat', 'dog', 'bat', 'elephant', 'bird')

        expect(pets.includes('cat')).toBe(true)

    })
    it('looking for at inside of pets', function () {
        const pets = new Fakay ('cat','rabbit', 'lion', 'tiger', 'bison')

        expect(pets.includes('at')).toBe(false)

    })
    it('looking for carrot inside of vegetables', function () {
        const vegetables = new Fakay ('carrot', 'letuce', 'tomato')

        expect(vegetables.includes('carrot')).toBe(true)

    })
})
describe('Fakay.prototype.indexOf', () => {

    const beasts = new Fakay('ant', 'bison', 'camel', 'duck', 'bison')

    it('returns the first index',  () => {

        const result = beasts.indexOf('bison')
        expect(result).toBe(1)
    })

    it('returns the first of another element', function () {

        const result = beasts.indexOf('bison', 2)
        expect(result).toBe(4)
    })
})
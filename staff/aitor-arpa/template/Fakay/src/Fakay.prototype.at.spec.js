describe('Fakay Prototype at', () => {
    f = new Fakay(5, 12, 8, 130, 44)
    f.at(2)
    it('The indicate the index return element', function () {
        expect(f[2]).toBe(8)

    })
})

describe('Fakay indexOf', function() {

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

    it('return position of element', () => {
        const result = beasts.indexOf('bison')
        expect(result).toBe(1)
    })

    it('return the second assigned element', () => {
        const result = beasts.indexOf('bison', 2)
        expect(result).toBe(4)
    })
})

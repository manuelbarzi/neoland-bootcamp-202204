
describe('Fakay.prototype.Include', () => {
    it('True Element', () => {

        let element = new Fakay ('a', 'b', 'c', 'd', 'e', 'f', '7');
      
        result = element.include('b')


        expect(result).toBe(true)
    })

    it('Not Found return False', () => {
        const chars = new Fakay ('h', 'e', 'l', 'l', 'o')

        let word = ''

        chars.forEach(function (char) {
            word += char
        })

        expect(word).toBe('hello')
    })
})

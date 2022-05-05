describe('Fakay.prototype.forEach', () => {
    it('should iterate and sum numbers', () => {
        const num = new Fakay (1,2,3,)

        let sum = 0

        num.forEach(function(num) {
            sum += num
        })

        expect(sum).toBe(6)
    })

    it('should concatenate all chars into a word', () => {
        const chars = new Fakay('h', 'e', 'l', 'l', 'o')

        let word = ''

        chars.forEach(function(char) {
            word += char
        })

        expect(word).toBe('hello')
    })
})
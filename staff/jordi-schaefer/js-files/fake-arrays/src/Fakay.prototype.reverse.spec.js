describe('Fakay.prototype.reverse', function() {
    it('should reverse a fakay with numbers', function() {
        const numbers = new Fakay (1, 2, 3, 4, 5, 6)
        // expected = [6, 5, 4, 3, 2, 1]

        reversed = numbers.reverse()
        expect(reversed.length).toBe(6)
        expect(reversed[0]).toBe(6)
        expect(reversed[1]).toBe(5)
        expect(reversed[2]).toBe(4)
        expect(reversed[3]).toBe(3)
        expect(reversed[4]).toBe(2)
        expect(reversed[5]).toBe(1)
        expect(reversed.length).toBe(numbers.length)
    })

    it('should reverse a fakay with strings', function() {
        const numbers = new Fakay ('uno', 'dos', 'tres', 'cuatro')
        // expected = ['cuatro', 'tres', 'dos', 'uno']

        reversed = numbers.reverse()
        expect(reversed.length).toBe(4)
        expect(reversed[0]).toBe('cuatro')
        expect(reversed[1]).toBe('tres')
        expect(reversed[2]).toBe('dos')
        expect(reversed[3]).toBe('uno')
        expect(reversed.length).toBe(numbers.length)
    })
})
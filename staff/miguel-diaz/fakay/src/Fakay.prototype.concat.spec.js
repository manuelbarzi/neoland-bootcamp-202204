describe('Fakay.prototype.concat', () => {
    it('should return a new instance with two already existing ones concatenated', () => {
        const chars1 = new Fakay('a', 'b', 'c')
        const chars2 = new Fakay()
        chars2[0] = 'd'
        chars2[1] = 'e'
        chars2[2] = 'f'
        chars2.length = 3

        const allChars = chars1.concat(chars2)

        // expect(allChars instanceof Fakay).toBeTruthy() // .toBe(true)
        expect(allChars).toBeInstanceOf(Fakay)

        expect(allChars.length).toBe(chars1.length + chars2.length)
        expect(allChars[0]).toBe(chars1[0])
        expect(allChars[1]).toBe(chars1[1])
        expect(allChars[2]).toBe(chars1[2])
        expect(allChars[3]).toBe(chars2[0])
        expect(allChars[4]).toBe(chars2[1])
        expect(allChars[5]).toBe(chars2[2])
    })

    it('should return a new instance with three already existing ones concatenated', () => {
        const chars1 = new Fakay('a', 'b', 'c')
        const chars2 = new Fakay()
        chars2[0] = 'd'
        chars2[1] = 'e'
        chars2[2] = 'f'
        chars2.length = 3
        const chars3 = new Fakay('g', 'h', 'i')

        const allChars = chars1.concat(chars2, chars3)

        expect(allChars).toBeInstanceOf(Fakay)

        expect(allChars).toBeInstanceOf(Fakay)
        expect(allChars.length).toBe(chars1.length + chars2.length + chars3.length)
        expect(allChars[0]).toBe(chars1[0])
        expect(allChars[1]).toBe(chars1[1])
        expect(allChars[2]).toBe(chars1[2])
        expect(allChars[3]).toBe(chars2[0])
        expect(allChars[4]).toBe(chars2[1])
        expect(allChars[5]).toBe(chars2[2])
        expect(allChars[6]).toBe(chars3[0])
        expect(allChars[7]).toBe(chars3[1])
        expect(allChars[8]).toBe(chars3[2])
    })

    it('should return a new instance with five already existing ones concatenated', () => {
        const chars1 = new Fakay('a', 'b', 'c')
        const chars2 = new Fakay()
        chars2[0] = 'd'
        chars2[1] = 'e'
        chars2[2] = 'f'
        chars2.length = 3
        const chars3 = new Fakay('g', 'h', 'i')
        const chars4 = new Fakay('j', 'k', 'l')
        const chars5 = new Fakay('m', 'n', 'o')

        const allChars = chars1.concat(chars2, chars3, chars4, chars5)

        expect(allChars).toBeInstanceOf(Fakay)

        expect(allChars).toBeInstanceOf(Fakay)
        expect(allChars.length).toBe(chars1.length + chars2.length + chars3.length + chars4.length + chars5.length)
        expect(allChars[0]).toBe(chars1[0])
        expect(allChars[1]).toBe(chars1[1])
        expect(allChars[2]).toBe(chars1[2])
        expect(allChars[3]).toBe(chars2[0])
        expect(allChars[4]).toBe(chars2[1])
        expect(allChars[5]).toBe(chars2[2])
        expect(allChars[6]).toBe(chars3[0])
        expect(allChars[7]).toBe(chars3[1])
        expect(allChars[8]).toBe(chars3[2])
        expect(allChars[9]).toBe(chars4[0])
        expect(allChars[10]).toBe(chars4[1])
        expect(allChars[11]).toBe(chars4[2])
        expect(allChars[12]).toBe(chars5[0])
        expect(allChars[13]).toBe(chars5[1])
        expect(allChars[14]).toBe(chars5[2])
    })

    it('should return a new instance with two already existing ones concatenated', () => {
        const chars1 = new Fakay('a', 'b', 'c')
        const chars2 = new Fakay()
        chars2[0] = 'd'
        chars2[1] = 'e'
        chars2[2] = 'f'
        chars2.length = 3

        const allChars = chars1.concat(chars2, 'g', 'h', 'i')

        // expect(allChars instanceof Fakay).toBeTruthy() // .toBe(true)
        expect(allChars).toBeInstanceOf(Fakay)

        expect(allChars.length).toBe(chars1.length + chars2.length + 3)
        expect(allChars[0]).toBe(chars1[0])
        expect(allChars[1]).toBe(chars1[1])
        expect(allChars[2]).toBe(chars1[2])
        expect(allChars[3]).toBe(chars2[0])
        expect(allChars[4]).toBe(chars2[1])
        expect(allChars[5]).toBe(chars2[2])
        expect(allChars[6]).toBe('g')
        expect(allChars[7]).toBe('h')
        expect(allChars[8]).toBe('i')
    })
})

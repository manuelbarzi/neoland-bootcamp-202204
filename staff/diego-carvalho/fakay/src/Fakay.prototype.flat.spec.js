describe('Fakay.prototype.flat', () => {

    it('should flat the fakay with depth one', () => {

        const fakay1 = new Fakay(0, 1, 2, new Fakay(3, 4))
        
        const result = fakay1.flat() // expected output: [0, 1, 2, 3, 4]
        
        expect(fakay1[0]).toBe(result[0])
        expect(fakay1[1]).toBe(result[1])
        expect(fakay1[2]).toBe(result[2])
        expect(fakay1[3][0]).toBe(result[3])
        expect(fakay1[3][1]).toBe(result[4])

    })

    it('should flat the fakay with depth two', () => {
        
        const fakay2 = new Fakay(0, 1, 2, new Fakay(new Fakay(new Fakay(3, 4))))
        
        const result = fakay2.flat(2) // expected output: [0, 1, 2, [3, 4]]
        
        expect(result[0]).toBe(0)
        expect(result[1]).toBe(1)
        expect(result[2]).toBe(2)
        expect(result[3][0]).toBe(3)
        expect(result[3][1]).toBe(4)

    })

    it('should flat the fakay with depth three', () => {
        
        const fakay3 = new Fakay(0, new Fakay(1, 2), 3, 4, new Fakay(new Fakay(new Fakay(new Fakay(3, 4)), 5)))
        
        const result = fakay3.flat(3)
        
        expect(result[0]).toBe(0)
        expect(result[1]).toBe(1)
        expect(result[2]).toBe(2)
        expect(result[3]).toBe(3)
        expect(result[4]).toBe(4)
        expect(result[5][0]).toBe(3)
        expect(result[5][1]).toBe(4)
        expect(result[6]).toBe(5)

    })


})



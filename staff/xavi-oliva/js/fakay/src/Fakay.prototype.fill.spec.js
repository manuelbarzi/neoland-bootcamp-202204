describe('Fakay.prototype.fill', function() {
    
    it('changes all elements to 1, from position 0', function(){
        const numbers = new Fakay (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        
        numbers.fill(1)

        expect(numbers[0]).toBe(1)
        expect(numbers[1]).toBe(1)
        expect(numbers[2]).toBe(1)
        expect(numbers[3]).toBe(1)
        expect(numbers[4]).toBe(1)
        expect(numbers[5]).toBe(1)
        expect(numbers[6]).toBe(1)
        expect(numbers[7]).toBe(1)
        expect(numbers[8]).toBe(1)
        expect(numbers[9]).toBe(1)
        expect(numbers[10]).toBe(1)
        expect(numbers[11]).toBe(1)
        expect(numbers[12]).toBe(1)
        expect(numbers[13]).toBe(1)
        expect(numbers[14]).toBe(1)

    })
    
    it('changes all elements to 1, from position 5', function(){
        const numbers = new Fakay (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        
        numbers.fill(1, 5)

        expect(numbers[0]).toBe(1)
        expect(numbers[1]).toBe(2)
        expect(numbers[2]).toBe(3)
        expect(numbers[3]).toBe(4)
        expect(numbers[4]).toBe(5)
        expect(numbers[5]).toBe(1)
        expect(numbers[6]).toBe(1)
        expect(numbers[7]).toBe(1)
        expect(numbers[8]).toBe(1)
        expect(numbers[9]).toBe(1)
        expect(numbers[10]).toBe(1)
        expect(numbers[11]).toBe(1)
        expect(numbers[12]).toBe(1)
        expect(numbers[13]).toBe(1)
        expect(numbers[14]).toBe(1)
        
    })
    
    it('changes all elements to 1, from position 6 to 11', function(){
        const numbers = new Fakay (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

        numbers.fill(1, 6, 11)

        expect(numbers[0]).toBe(1)
        expect(numbers[1]).toBe(2)
        expect(numbers[2]).toBe(3)
        expect(numbers[3]).toBe(4)
        expect(numbers[4]).toBe(5)
        expect(numbers[5]).toBe(6)
        expect(numbers[6]).toBe(1)
        expect(numbers[7]).toBe(1)
        expect(numbers[8]).toBe(1)
        expect(numbers[9]).toBe(1)
        expect(numbers[10]).toBe(1)
        expect(numbers[11]).toBe(1)
        expect(numbers[12]).toBe(13)
        expect(numbers[13]).toBe(14)
        expect(numbers[14]).toBe(15)

    })
})
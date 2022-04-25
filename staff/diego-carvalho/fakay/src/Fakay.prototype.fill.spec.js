describe('Fakay.prototype.fill', function(){
    it('fill with 6 from position 2 until position 5', function(){
        const obj1 = new Fakay (1, 2, 3, 4, 5, 8, 7)

        obj1.fill(6, 2, 5)//array(obj1),elemente(6),start(2) y end(5)

        // [1, 2, 6, 6, 6, 8, 7])

        expect(obj1[0]).toBe(1)
        expect(obj1[1]).toBe(2)
        expect(obj1[2]).toBe(6)
        expect(obj1[3]).toBe(6)
        expect(obj1[4]).toBe(6)
        expect(obj1[5]).toBe(8)
        expect(obj1[6]).toBe(7)

    })
    
    it('fill with 6 from position 2 until to the last position ', function () {
        const obj2 = new Fakay (1, 2, 3, 4, 5, 6, 7)

        obj2.fill(6, 2)//array(obj2),elemente(6),start(2) y end(until the end of obj3)

        // [1, 2, 6, 6, 6, 6, 6])

        expect(obj2[0]).toBe(1)
        expect(obj2[1]).toBe(2)
        expect(obj2[2]).toBe(6)
        expect(obj2[3]).toBe(6)
        expect(obj2[4]).toBe(6)
        expect(obj2[5]).toBe(6)
        expect(obj2[6]).toBe(6)

    })

    it('fill with 6 from position 0 until to seventh position ', function () {
        const obj3 = new Fakay (1, 2, 3, 4, 5, 6, 7)

        obj3.fill(6)//the function fill change all elements of the obj3 to 6

        // [6, 6, 6, 6, 6, 6, 6])

        expect(obj3[0]).toBe(6)
        expect(obj3[1]).toBe(6)
        expect(obj3[2]).toBe(6)
        expect(obj3[3]).toBe(6)
        expect(obj3[4]).toBe(6)
        expect(obj3[5]).toBe(6)
        expect(obj3[6]).toBe(6)

    })

    
})
describe('Fakay constructor', function(){

    

    it('Should build an instance of Fakay', function(){

        const fak = new Fakay

        expect(fak).toBeInstanceOf(Fakay)
    })

    it('Should build an instance with initial elements if passed as parameters', function(){

        const fak = new Fakay(1, 2, 3)


        expect(fak).toBeInstanceOf(Fakay)
        expect(fak.length).toBe(3)
        expect(fak[0]).toBe(1)
        expect(fak[1]).toBe(2)
        expect(fak[2]).toBe(3)
    })



})

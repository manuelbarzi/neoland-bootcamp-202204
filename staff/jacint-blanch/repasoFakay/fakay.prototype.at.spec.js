describe('at', function(){
    const numbers = new Fakay(5, 12, 8, 130, 44)

    it('Positive Index', function(){
        const item = numbers.at(2)

        expect(item).toBe(8)
    })
    
    it('Negative Index', function(){
        const item = numbers.at(-2)

        expect(item).toBe(130)
    })

})


describe('at', function(){
    const numbers = new Fakay(5, 12, 8, 130, 44)

    test('Positive Index', function(){
        const item = numbers.at(2)

        expect(item).toBe(8)
    })
    
    test('Negative Index', function(){
        const item = numbers.at(-2)

        expect(item).toBe(130)
    })

})


describe('splice', function() {
    
    test('Add one element in position 1', function() {
        
        const months = ['Jan', 'March', 'April', 'June']
        
        // const expectedResult = ['Jan', 'Feb', 'March', 'April', 'June']

        splice(months, 1, 0, 'Feb')


        expect(months.length).toBe(5)        
        expect(months[0]).toBe('Jan')
        expect(months[1]).toBe('Feb')
        expect(months[2]).toBe('March')
        expect(months[3]).toBe('April')
        expect(months[4]).toBe('June')

    })

    // test('delete element on position 4 and replace for another element', function() {
        
    //     const months = ['Jan', 'Feb', 'March', 'April', 'June']

    //     // const expectedResult = ['Jan', 'Feb', 'March', 'April', 'May']

    //     splice(months, 4, 1, 'May')

    //     expect(months.length).toBe(5)
    //     expect(months[0]).toBe('Jan')
    //     expect(months[1]).toBe('Feb')
    //     expect(months[2]).toBe('March')
    //     expect(months[3]).toBe('April')
    //     expect(months[4]).toBe('May')

    // })

})
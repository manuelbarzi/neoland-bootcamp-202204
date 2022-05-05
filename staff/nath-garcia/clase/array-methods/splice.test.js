describe('splice', () => {
    test('inserts  a Feb between Jan and March', () => {
        const months = ['Jan', 'March', 'April', 'June']

        const removedElements = splice(months, 1, 0, 'Feb')

        const expectedMonths = ['Jan', 'Feb', 'March', 'April', 'June']

        const expectedRemovedElements = []

        expec(months).toEqual(expectedMonths)
        expect(removedElements).toEqual(expectedRemovedElements)
    })

    test('replaces June by May', () => {
        const months = ['Jan', 'Feb', 'March', 'April', 'June']

        const removedElements = splice(months, 4, 1, 'May')
    })
})
test('delete one element -mandarin- from index 3' , () =>{

})

test('')
test('delete one element')
test('from index 0, delete 2 elements -')

it('should remove 1 item -mandarin- from index -2', )
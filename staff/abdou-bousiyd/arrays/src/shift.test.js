
describe('TEST shift', function() {
    test('should remove the first element the array', () => { 
        const months = ['Jan', 'March', 'April', 'June'];

        const removed =shift(months)
    
        expect(months.length).toBe(3)
        expect(removed).toBe('Jan')
        expect(months[0]).toBe('March')
    })

    test('returns undefined on empty array', () => {
        const nums = []

        const num = shift(nums)

        expect(num).toBe(undefined)
    })
})



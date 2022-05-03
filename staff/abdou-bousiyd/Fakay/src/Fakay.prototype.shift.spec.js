
describe('Fakay shift', function() {
    it('should remove the first element the array', () => { 
        const months = ['Jan', 'March', 'April', 'June'];

        const removed =months.shift()
    
        expect(months.length).toBe(3)
        expect(removed).toBe('Jan')
        expect(months[0]).toBe('March')
    })

    it('should return undefined on empty array', () => {
        const nums = []

        const num = nums.shift()

        expect(num).toBe(undefined)
    })
})



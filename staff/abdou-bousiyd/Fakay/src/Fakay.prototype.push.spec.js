
describe('Fakay push', function() {
    it('should adds one element to the end of an array and returns the new length of the array', () => {

        const names = ['manu', 'jorde', 'jacint'];
        
        const allNames = names.push('nath', 'paula', 'federico')
        
        const result = ['manu', 'jorde', 'jacint', 'nath', 'paula', 'federico']
        expect(allNames).toBe(6)

        for (let i = 0; i < names.length; i++) {
            expect(names[i]).toBe(result[i])
        }
    })

    it('should adds one or more elements to the end of an array and returns the new length of the array', () => {
    
        const names = ['manu', 'jorde', 'jacint'];
        
        const allNames = names.push('nath')

        console.log(allNames)

        const result = ['manu', 'jorde', 'jacint', 'nath']
        
        expect(allNames).toBe(4)
        
        for (let i = 0; i < names.length; i++) {
            expect(names[i]).toBe(result[i])
        }
    })
})

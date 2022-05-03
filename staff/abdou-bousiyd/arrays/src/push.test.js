
describe('push', function() {
    test('should adds one element to the end of an array and returns the new length of the array', () => {

        const names = ['manu', 'jorde', 'jacint'];
        
        const allNames = push(names, 'nath', 'paula', 'federico')
        
        const result = ['manu', 'jorde', 'jacint', 'nath', 'paula', 'federico']
        
        console.assert(allNames.length === 6)
        
        for (let i = 0; i < names.length; i++) {
            console.assert(names[i] === result[i])
        }
    })

    test('should adds one or more elements to the end of an array and returns the new length of the array', () => {
    
        const names = ['manu', 'jorde', 'jacint'];
        
        const allNames = push(names, 'nath')
        
        const result = ['manu', 'jorde', 'jacint', 'nath']
        
        console.assert(allNames.length === 4)
        
        for (let i = 0; i < names.length; i++) {
            console.assert(names[i] === result[i])
        }
    })
})

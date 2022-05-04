/*The filter() method creates a new array with all elements that pass the test implemented by the provided function.*/
describe('filter', function () {

    test('Creates a new array with all elements that pass the test implemented by the provided function. word.length > 6', function () {
        
        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

        const result = filter(words, (word) => word.length > 6);

        expect(result[0]).toBe('exuberant')
        expect(result[1]).toBe('destruction')
        expect(result[2]).toBe('present')

    })
})
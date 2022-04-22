describe('forEach', function(){

    
    test('launch a callback to sum the elements', function(){
        
        const nums = [1, 2, 3]

        let sum = 0

        forEach(nums, function(num) {
            sum += num
        })

        expect(sum).toBe(6)
        
    })

    test('launch a callback to sum the elements', function(){

        const chars = ['h', 'e', 'l', 'l', 'o']

        let word = ''

        forEach(chars, function(char) {
            word += char
        })

        expect(word).toBe('hello')
        
    })

})
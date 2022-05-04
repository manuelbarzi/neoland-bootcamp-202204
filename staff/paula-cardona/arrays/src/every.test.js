/*The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
*/

describe ('every', function(){
    it ('positive randomNums', function(){
        const array = [1, 30, 39, 29, 10, 13]
        const result= every (array, function(element){
            return element <40
        })
        expect(result).toBe(true)
    })
    it ('negative randomNums', function(){
        const array = [1, 30, 39, 29, 10, 13]
        const result= every (array, function(element){
            return element > 40
        })
        expect(result).toBe(false)
    })

})


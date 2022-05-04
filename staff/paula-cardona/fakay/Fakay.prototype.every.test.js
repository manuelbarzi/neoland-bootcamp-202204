describe ('every', function(){
    it ('positive randomNums', function(){
        const array = new Fakay (1, 30, 39, 29, 10, 13)
        const result= array.every (function(element){
            return element <40
        })
        expect(result).toBe(true)
    })
    it ('negative randomNums', function(){
        const array = new Fakay (1, 30, 39, 29, 10, 13)
        const result= array.every (function(element){
            return element > 40
        })
        expect(result).toBe(false)
    })

})
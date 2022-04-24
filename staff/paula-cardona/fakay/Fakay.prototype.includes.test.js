
describe ('includes', function(){

    it ('letter with true', function(){
        const chars = new Fakay ('a', 'b', 'c', 'd', 'e', 'f')
        const result = chars.includes('d')
        expect (result).toBe(true)
    })
    
    it('letter with false', function(){
        const chars = new Fakay ('a', 'b', 'c', 'd', 'e', 'f')
        const result = chars.includes('j')
        expect (result).toBe(false)
    })
    it ('num with true', function(){
        const nums = new Fakay (100, 104, 203, 506)
        const result = nums.includes(203)
        expect (result).toBe(true)
    })
    
    it ('num with false', function(){
        const nums = new Fakay (100, 104, 203, 506)
        const result = nums.includes(3)
        expect (result).toBe(false)
    })

})


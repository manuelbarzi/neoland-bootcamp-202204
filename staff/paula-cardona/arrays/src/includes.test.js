/*The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/


describe ('includes', function(){

    test ('letter with true', function(){
        const chars = ['a', 'b', 'c', 'd', 'e', 'f']
        const result = includes (chars, 'd')
        expect (result).toBe(true)
    })
    
    test('letter with false', function(){
        const chars = ['a', 'b', 'c', 'd', 'e', 'f']
        const result = includes (chars, 'j')
        expect (result).toBe(false)
    })
    test ('num with true', function(){
        const nums = [100, 104, 203, 506]
        const result = includes (nums, 203)
        expect (result).toBe(true)
    })
    
    test('num with false', function(){
        const nums = [100, 104, 203, 506]
        const result = includes (nums, 3)
        expect (result).toBe(false)
    })

})



/*---------------------------------------->

console.log('TEST includes')

const chars = ['a', 'b', 'c', 'd', 'e', 'f']

{
    console.log('CASE 1')
    const result = includes(chars, 'd')
    //console.assert(result === true)
    console.assert(result)
}

{
    console.log('CASE 2')
    const result = includes(chars, 'j')
    //console.assert(result === false)
    console.assert(!result)
}

const nums = [100, 104, 203, 506]

{
    console.log('CASE 3')
    const result = includes(nums, 1000)
    console.assert(result === false)
}

{
    console.log('CASE 4')
    const result = includes(nums, 203)
    console.assert(result === true)
}*/
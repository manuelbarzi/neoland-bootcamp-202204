describe('some', function () {
    test('returns true on element matching callback condition', function () {
        const nums = [1, 2, 3, 4, 5]

        const even = element => element % 2 === 0

        const contains = some(nums, even)

        expect(contains).toBe(true)
    })

    test('returns false on element not matching callback condition', function () {
        const nums = [1, 2, 3, 4, 5]

        const greaterThan7 = element => element > 7 === 0

        const contains = some(nums, greaterThan7)

        expect(contains).toBe(false)
    })
})






/*------------------------------------------------------->

console.log ('TEST some')


{
    console.log('TEST 1')
    
    const array = [1, 2, 3, 4, 5];
    const result =some(array, function(element){
        return element === 4

    })
  
console.assert(result ===true)

}

{

    console.log ('Test 2')

    const array = ["blue", "green", "black", "orange", "yellow"]
    const Found = map(array, function(element){
        return Found === "white"

})
console.assert (result===false)

}*/


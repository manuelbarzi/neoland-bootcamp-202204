describe('at', function() {
    const nums = [5, 12, 8, 130, 44]

    test('positive index', function() {
        const result = at(nums, 2)

        expect(result).toBe(8)
    })

    test('negative index', function() {
        const result = at(nums, -2)
    
        expect(result).toBe(130)
    })
})
/*let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
 expected output: "Using an index of -2 item returned is 130"
*/

/*describe('at', function() {
    const nums = [5, 12, 8, 130, 44]

    test('positive index', function() {
        const result = at(nums, 2)

        expect(result).toBe(8)
    })

    test('negative index', function() {
        const result = at(nums, -2)
    
        expect(result).toBe(130)
    })
})*/
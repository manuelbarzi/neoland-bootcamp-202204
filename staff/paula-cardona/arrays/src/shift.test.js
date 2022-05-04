//El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

describe('shift', function() {
    test('extracts first element from non-empty array', function() {
        const nums = [1, 2, 3]

        const num = shift(nums)

        expect(num).toBe(1)
        expect(nums.length).toBe(2)
        expect(nums[0]).toBe(2)
        expect(nums[1]).toBe(3)
    })

    test('returns undefined on empty array', function (){
        const nums = []

        const num = shift(nums)

        expect(num).toBe(undefined)
    })
})





/*The shift() method removes the first element from an array 
and returns that removed element. This method changes the length of the array
Undefined if the array is empty.*/




// es toBe(1) porque el 1 es el primero
//me quedo el primer elemento

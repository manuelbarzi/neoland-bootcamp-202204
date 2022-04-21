
describe('every', function () {
    const numbers = [2, 4, 6, 0]

    test('check is every number is bigger than one', function () {

        //here is the function that will check if every value inside of the array is bigger than 1
        function isBiggerThanOne(value) {
            if (value > 1) {
                return true //if every value is bigger than 1 it will return true
            } else {
                return false//if one value is smaller than 1 it will return false
            }
        }

        const every = customEvery(numbers, isBiggerThanOne)

        expect(every).toBe(false)


    })

    test('check if every are numbers', () => {

        const array = [1, 30, 39, 'hola', 29, 10, 13];
        
        const allAreNumbers = currentValue => typeof currentValue === 'number';
        
        const result = customEvery(array, allAreNumbers);
        
        expect(result).toBe(false);

    })




})

/*
// Is every bigger than 1
function isBiggerThanOne(value) {
    if (value > 1) {
        return true
    } else {
        return false
    }
}

function customEvery (array, comparer) {
    for (let i = 0; i < array.length; i++) {
        const result = comparer(array[i])
        if (result === false) {

            return false
        } 
    }

    return true
}
*/



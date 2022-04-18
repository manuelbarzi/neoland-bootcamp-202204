
console.log('TEST every')

{
    console.log('Test 01')

    const numbers = [2, 4, 6, 0]//array numbers

    //here is the function that will check if every value inside of the array is bigger than 1
    function isBiggerThanOne(value) {
        if (value > 1) {
            return true //if every value is bigger than 1 it will return true
        } else {
            return false//if one value is smaller than 1 it will return false
        }
    }

    console.assert(isBiggerThanOne)

}
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



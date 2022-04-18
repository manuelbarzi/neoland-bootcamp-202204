
console.log('TEST find')
{
    
    console.log('CASE 01')

    const array1 = [5, 12, 8, 130, 44];
    // expected output: 130

    //here is the function that will check if every value inside of the array is bigger than 12
    function isBiggerThan12(value) {
        if (value > 12) {
            return true //if every value is bigger than 1 it will return true
        }
    }

    find(array1, isBiggerThan12)//here:function find with two elements(array and finder)

    console.assert(array1[3] === 130)//the arra1[3] === 130. True outprint 130 
}



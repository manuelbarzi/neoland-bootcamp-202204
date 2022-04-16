
console.log('TEST every')

{
    console.log('CASE 01')

    let biggerthan10 = [20, 25, 15, 200]

    function isBigger(element, index, array) {
        return element > 10

    }
    console.assert(biggerthan10.every(isBigger))
}

{
    console.log('CASE 02')

    let biggerthan15 = [20, 25, 44, 5]

    function isBigger15(element, index, array) {
        if (biggerthan15.array > 15) {
            return true
        }
        return false
    }
  

}
{
    console.log('CASE 03')

    const age = [32, 33, 19, 40]

    age.every(checkAge)

    function checkAge(age) {
        return age > 18;

    }
}
//comprobar si todos los elementos del array pasan por el test implementado por la función.
/*
function every(element, index, array) {
    for (let i = 0; i < array.length; i++) {
        if (element >= element.array) {
            return true
        }
        return false

    }
}
*/



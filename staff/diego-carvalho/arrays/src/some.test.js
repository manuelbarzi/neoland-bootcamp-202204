
console.log('TEST some')

{
    console.log('CASE 01')

    let numbers = [ 1, 5, 7, 12, 26 ]

    const biggerThan20 = some(numbers, function(elem){
        return elem > 20
    })

    console.assert(biggerThan20 === true)

}

{ 
    console.log('CASE 02')

    let names = ['miguel','juan ','leo','jordi', 'diego']

    const myName = some(names, function(elem){
        return elem === 'diego'
    })

    console.assert(myName === true)
}
 /*function checkValue(value) {
        if (value === array) {
            return true 
        }
    }
*/
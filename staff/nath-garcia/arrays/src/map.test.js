console.log('TEST map')

const numbers = [1, 4, 9, 16]

{
    console.log('CASE 1')

    let doubles = map(numbers, function(elem){
        return elem * 2
    })
    console.assert(doubles[0] === 2)
    console.assert(doubles[1] === 8)
    console.assert(doubles[2] === 18)
    console.assert(doubles[3] === 32)
}
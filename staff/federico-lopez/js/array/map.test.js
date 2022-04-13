console.log('TEST map')

const numbers = [1, 4, 9, 16]

{
    console.count('Case map')

    let doubles = map(numbers, function(elem){
        return elem * 2
    })

    console.assert(doubles[0] === 2)
    console.assert(doubles[1] === 8)
    console.assert(doubles[2] === 18)
    console.assert(doubles[3] === 32)
}

{
    console.count('Case map')

    let doubles = map(numbers, function(elem){
        return elem + 10
    })

    console.assert(doubles[0] === 11)
    console.assert(doubles[1] === 14)
    console.assert(doubles[2] === 19)
    console.assert(doubles[3] === 26)
}
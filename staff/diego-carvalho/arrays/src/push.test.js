
console.log('TEST push')

{
    console.log('CASO 1')

    let valors = [1, 2, 3]
    valors.push(4)

    // [1, 2, 3, 4]
}

{
    console.log('CASO 2')

    let numbers = [3, 4]
    numbers.push(5)
    console.assert(numbers[0] === 3)
    console.assert(numbers[1] === 4)
    console.assert(numbers[2] === 5)
 // [3, 4, 5]
}

{
    console.log('CASO 3')

    const animals = ['dog','cat','monkey','bird']
    animals.push('camel')
    console.assert(animals[0] === 'dog')
    console.assert(animals[1] === 'cat')
    console.assert(animals[2] === 'monkey')
    console.assert(animals[3] === 'bird')
    console.assert(animals[4] === 'camel')
     //['dog','cat','monkey','bird', 'camel']

}

{
    const array1 = [1, 2, 3]
    const num = 4

    const union = push(array1, num) 

    console.assert(union === 4)
    console.assert(array1[3] === 4)

    }


console.log('TEST SOME')

{

    console.log('CASE 1')

    const nums = [1, 2, 3, 4, 5]

    const even = element => element % 2 === 0

    const result = some(nums, even)

    console.assert(result === true)

}

{

    console.log('CASE 2')

    const pets = ['dog', 'cat', 'bird', 'elephant']

    const isThereATiger = element => element === "tiger"

    const result = some(pets, isThereATiger)

    console.assert(result === false)

}

{

    console.log('CASE 3 - With index')

    const pets = ['cat', 'dog', 'bird', 'elephant']

    const isThereACat = element => element === "cat"

    const result = some(pets, isThereACat, 1)

    console.assert(result === false)

}
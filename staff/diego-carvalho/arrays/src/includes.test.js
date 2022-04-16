console.log('TEST INCLUDES')



{
    console.log('CASE 1')

    const array4 = [2, 3, 4];

    console.assert(includes(array4, 2) === true)
}

{
    console.log('CASE 2')

    const pets = ['cat', 'dog', 'bat', 'elephant', 'bird'];

    console.assert(includes(pets, 'cat') === true)
}

{
    console.log('CASE 3')

    const pets = ['cat', 'rabbit', 'lion', 'tiger', 'bison'];
    
    console.assert(includes(pets, 'at') === false)
}

{
    console.log('CASE 4')

    const vegetables = ['carrot','letuce','tomato']

    console.assert(includes(vegetables, 'carrot') === true)
}



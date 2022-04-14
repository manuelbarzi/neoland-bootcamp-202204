console.log('TEST INCLUDES')

const array4 = [1, 2, 3];

{
    console.log('CASE 1')
    console.assert(includes(array4, 2) === true)
}

const pets = ['cat', 'dog', 'bat', 'elephant', 'bird'];
{
    console.log('CASE 2')
    console.assert(includes(pets, 'cat') === true)
}

{
    console.log('CASE 3')
    console.assert(includes(pets, 'at') === false)
}

{
    console.log('CASE 4')
    console.assert(includes(pets, 'monkey') === false)
}



console.log('TEST includesV2')

const array5 = [1, 2, 3];
{
    console.log('CASE 1')
    console.assert(includesV2(array5, 2) ===true);
}

const pets = ['cat', 'dog', 'bat', 'elephant', 'bird'];
{
    console.log('CASE 2')
    console.assert(includesV2(pets, 'cat') === true)
}

{
    console.log('CASE 3')
    console.assert(includesV2(pets, 'at') === false)
}

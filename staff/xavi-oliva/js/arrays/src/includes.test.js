console.log('TEST includes')

const array = [1, 2, 3];

{
    console.log('CASE 1')

    console.assert(includes(array, 2) === true );

}

// expected output: true
{
    console.log('CASE 2')

    const pets = ['cat', 'dog', 'bat'];

    console.assert(includes(pets, 'at') === false);
}

console.log()
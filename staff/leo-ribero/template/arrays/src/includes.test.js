console.log('TEST includes')

const pets = ['cat', 'dog', 'bat'];

console.assert(includes(pets, 'dog') === true)
console.assert(includes(pets, 'pig') === false)

//console.log(pets.includes('cat'));
// expected output: true



//console.log(pets.includes('at'));
// expected output: false
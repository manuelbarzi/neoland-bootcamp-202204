console.log('TEST lastIndexOf')

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

//console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.assert(lastIndexOf(animals, 'Penguin' -1) === 2)
console.assert(lastIndexOf(animals, 'Dodo') === 3)
console.assert(lastIndexOf(animals, 'Dodo', 0) === 0)
//console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

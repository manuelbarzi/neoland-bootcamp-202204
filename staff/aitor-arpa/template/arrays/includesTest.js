console.log('TEST include')


let array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let par = 2
{
console.log('CASE 1')

const result = include(array1 , par )
console.assert(result == false )
console.assert(include(array1,'b') === true)
}


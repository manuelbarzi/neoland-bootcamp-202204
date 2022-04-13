console.log('TEST lastIndexOf')


const res1 = lastIndexOf(['a', 'c', 'b','e','c'], 'c')
const res2 = lastIndexOf(['a', 'b', 'c', 'e'], 'abc')
const res3 = lastIndexOf(['d', 'l', 'j', 'r',  'j', 'n'], 'j', 3)

console.assert(res1 === 4)
console.assert(res2 === -1)
console.assert(res3 === 2)
console.log('CASE 1')

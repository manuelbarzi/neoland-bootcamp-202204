console.log('TEST concat')

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

console.assert(result.length === array1.length + array2.length)

{
	console.log('CASE 1')

	const result = concat(array1, array2)

	console.assert(result.length === array1.length + array2.length)
	console.assert(result[0] === array1[0])
	console.assert(result[1] === array1[1])
	console.assert(result[2] === array1[2])
	console.assert(result[3] === array2[0])
	console.assert(result[4] === array2[1])
	console.assert(result[5] === array2[2])
}

const array3 = ['g', 'h', '1']

{
	console.log('CASE 2')

	const result = concat(array1, array2, array3)

	console.assert(result.length === array1.length + array2.length + array3.length)
	console.assert(result[0] === array1[0])
	console.assert(result[1] === array1[1])
	console.assert(result[2] === array1[2])
	console.assert(result[3] === array2[0])
	console.assert(result[4] === array2[1])
	console.assert(result[5] === array2[2])
	console.assert(result[6] === array3[0])
	console.assert(result[7] === array3[1])
	console.assert(result[8] === array3[2])
}
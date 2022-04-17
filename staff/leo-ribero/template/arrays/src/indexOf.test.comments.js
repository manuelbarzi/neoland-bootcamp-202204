console.log('TEST indexOf')

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

{
	console.log('CASE 1')

	const result = indexOf(beasts, 'bison')

	console.assert(result === 1)
}

{
	console.log('CASE 2')

	const result = indexOf(beasts, 'bison', 2)
	// no puedo declarar dos const en el mismo scope
	// pero si puedo hacerlo en un scope aparte {} "curly braces"
	console.assert(result === 4)
}

const a = ['a', 'b', 'c', 'd', 'e']




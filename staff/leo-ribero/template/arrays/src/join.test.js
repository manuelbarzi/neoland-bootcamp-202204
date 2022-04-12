console.log('TEST join')

const elements = ['Fire', 'Air', 'Water'];

{
	console.log('CASE 1')

	const result = join(elements)

	console.assert(result === 'Fire,Air,Water')
}

{
	console.log('CASE 2')

	const result = join(elements, '')

	console.assert(result === 'FireAirWater')
}

{
	console.log('CASE 3')

	const result = join(elements, '-')

	console.assert(result === 'Fire-Air-Water')
}
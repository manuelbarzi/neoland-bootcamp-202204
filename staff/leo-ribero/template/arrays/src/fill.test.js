
{
	console.log('TEST fill')


	{
		console.log('CASE: 1')

		array = [1, 2, 3, 4, 5]

		fill(array, 1) 
		// console.assert(array[0] === 1)
        // console.assert(array[1] === 1) 
		// console.assert(array[2] === 1)
        // console.assert(array[3] === 4) 
		// console.assert(array[4] === 5)
        // console.log(array)
	}
    {
		console.log('CASE: 2')

		array = [1, 2, 3, 4, 5]

		fill(array, 1, 0, 3) 
		console.assert(array[0] === 1)
        console.assert(array[1] === 1) 
		console.assert(array[2] === 1)
        console.assert(array[3] === 4) 
		console.assert(array[4] === 5)
        // console.log(array)
	}


}

describe('fill', function(){
	test('debo poner la descripcion de este caso aqui', function(){

		array = [1, 2, 3, 4, 5]

		fill(array, 1) 

		expect(array[0]).toBe(1)
		expect(array[1]).toBe(1)
		expect(array[2]).toBe(1)
		expect(array[3]).toBe(1)
		expect(array[4]).toBe(1)
		
	})

	test('descripcion aqui', function(){

		array = [1, 2, 3, 4, 5]

		fill(array, 1, 0, 3) 
	
		expect(array[0]).toBe(1)
		expect(array[1]).toBe(1)
		expect(array[2]).toBe(1)
		expect(array[3]).toBe(4)
		expect(array[4]).toBe(5)

	})

})


// {
// 	console.log('TEST fill')


	// {
	// 	console.log('CASE: 1')

	// 	array = [1, 2, 3, 4, 5]

	// 	fill(array, 1) 
	// 	console.assert(array[0] === 1)
    //     console.assert(array[1] === 1) 
	// 	console.assert(array[2] === 1)
    //     console.assert(array[3] === 1) 
	// 	console.assert(array[4] === 1)
    //     // console.log(array)
	// }
    // {
	// 	console.log('CASE: 2')

	// 	array = [1, 2, 3, 4, 5]

	// 	fill(array, 1, 0, 3) 
	// 	console.assert(array[0] === 1)
    //     console.assert(array[1] === 1) 
	// 	console.assert(array[2] === 1)
    //     console.assert(array[3] === 4) 
	// 	console.assert(array[4] === 5)
    //     // console.log(array)
	// }


// }
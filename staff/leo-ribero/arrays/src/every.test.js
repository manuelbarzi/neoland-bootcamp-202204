{
    console.log('TEST every')

	{
		console.log("CASE: 1")

        const array1 = [1, 30, 39, 29, 10, 13, 3];

        const isBelowThreshold = (currentValue) => currentValue < 40;

        const result = every(array1, isBelowThreshold)

        console.assert(result === true)

	}

	{
		console.log("CASE: 2")
		var fruits = ['apples', 'bananas', 'mangos', 'pinapples'];

        function verify(array) {
			if (array.includes('a'))
				return true
		}

		const result = every(fruits, verify)


		console.assert(result === true)


	}
    // {

    //     console.log('CASE 2')
    
    //     const array = [1, 30, 39, 'palabra', 29, 10, 13]
        
    //     const allNumbers = currentValue => typeof currentValue === 'numero'
        
    //     const result = every(array, allNumbers)
        
    //     console.assert(result === false)
        
    // }







}
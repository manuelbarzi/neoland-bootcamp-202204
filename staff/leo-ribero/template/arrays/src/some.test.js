{
    console.log('TEST some')

	{
		console.log("CASE: 1")
		const num = [1, 2, 3, 4, 5, 6]

        const even = (element) => element % 2 === 0;

        const result = some(num, even)

        console.assert(result === true)

	}


	{
		console.log("CASE: 2")
		var fruits = ['apples', 'bananas', 'mangos', 'pinapples'];

        function thereAreBananas(){
            for (let i = 0; i < fruits.length; i++){
                if (fruits[i] === 'bananas')
                return true
            }
        }
        const result = some(fruits, thereAreBananas)

        console.assert(result === true)


	}







}
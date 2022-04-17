// at 
{
    console.log('TEST at')

    const nums = [5, 12, 8, 130, 44]

    {
        console.log('CASE 1')

        const result = at(nums, 2)

        console.assert(result === 8)
    }

    {
        console.log('CASE 2')

        const result = at(nums, -2)

        console.assert(result === 130)
    }
}
// para probar en consola, volver a copiar el array nums


// indexOf 

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


// lastIndexOf 
{
    console.log('TEST lastIndexOf')

    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
    
    //console.log(animals.lastIndexOf('Dodo'));
    // expected output: 3
    
    console.assert(lastIndexOf(animals, 'Penguin' -1) === 2)
    console.assert(lastIndexOf(animals, 'Dodo') === 3)
    console.assert(lastIndexOf(animals, 'Dodo', 0) === 0)
    //console.log(animals.lastIndexOf('Tiger'));
    // expected output: 1
    

}


/*The lastIndexOf() method returns the last index at which a given element 
can be found in the array, or -1 if it is not present. 
The array is searched backwards, starting at fromIndex.

lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)*/

describe('LastIndexOf', function(){

    it ('Look for an element that is repeated', function() {
        const animals = new Fakay ('Dodo', 'Tiger', 'Penguin', 'Dodo', undefined)
        
        const result = animals.lastIndexOf ('Dodo')
        
        expect(result).toBe(3)

    })

    it ('Look for an element that is only once', function (){
        const animals = new Fakay ('Dodo', 'Tiger', 'Penguin', 'Dodo', undefined)
        
        const result = animals.lastIndexOf ('Tiger')
        
        expect(result).toBe(1);

    })    

    it ('Look for undefined', function() {
        
        const animals= new Fakay ('Dodo', 'Tiger', 'Penguin', 'Dodo', undefined)
        const result = animals.lastIndexOf (undefined)
        
        expect(result).toBe(4);

    })

})


/*----------------------------------->

console.log('TEST lastindexOf')


const animals = ['ant', 'bison', 'camel', 'duck', 'bison']

{
    console.log('CASE 1')
    const result = lastindexOf(animals, 'bison')
    console.assert(result === 1)
}

{
    console.log('CASE 2')
    const result = lastindexOf(animals, 'camel')
    console.assert(result === 2)
}

{
    console.log('CASE 3')
    const result = lastindexOf(animals, 'ant')
    console.assert(result === 0)
}

{
    console.log('CASE 4')
    const result = lastindexOf(animals, 'bison', 2)
    console.assert(result === 4)
}

{
    console.log('CASE 5')
    const result = lastindexOf(animals, 'bison', -1)
    console.assert(result === 1)
}

{
    console.log('CASE 6')
    const result = lastindexOf(animals, 'bison', -3)
    console.assert(result === 1)
}
*/
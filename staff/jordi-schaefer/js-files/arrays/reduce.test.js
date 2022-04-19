{

    console.log('TEST reduce')


    
    {
        console.log('CASE 1')
        
        const nums = [1, 2, 3, 4]
        
        const result = reduce(nums, function(anterior, actual){
            return anterior + actual
        })

        console.assert(result === 10)
    }


    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    {
        console.log('CASE 2')

        const result = reduce(chars, function(a, b){
            return a.concat(b);
        }, 'letras: ')

        console.assert(result === 'letras: abcdefg')
    }

}
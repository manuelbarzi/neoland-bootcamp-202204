{
    console.log('TEST shift')

    
    {
        console.log('CASE: 1')
        const animals = ['vaca', 'cabra', 'oveja', 'cerdo', 'caballo']
        
        const result = shift(animals)

        console.assert(result === 'vaca')
        console.assert(animals.length === 4)
    }


}
{
    console.log('TEST pop')

    
    {
        console.log('CASE: 1')
        const animals = ['vaca', 'cabra', 'oveja', 'cerdo', 'caballo']
        
        const result = pop(animals)

        console.assert(result === 'caballo')
        console.assert(animals.length === 4)
    }


}



describe ('push', function() {
    test('push one element', function() {

        const animals = ['vaca', 'cabra', 'oveja', 'cerdo', 'caballo']
        const result = push(animals, 'elefante')

        //console.assert(result === 6)
        expect(result).toBe(6)
        console.assert(typeof result === 'number')
        console.assert(animals[5]==='elefante')
        console.assert(typeof animals[5] ==='string')

    })


    test('push multiple elements', function() {

        const animals = ['vaca', 'cabra', 'oveja', 'cerdo', 'caballo']
        const result = push(animals, 'elefante', 'gallina', 'pato', 'pajaro')

        console.assert(result === 9)
        console.assert(typeof result === 'number')
        console.assert(animals[7]==='pato')
        console.assert(typeof (animals[5] && animals[6]) ==='string')

    })

})



/*

{
    console.log('TEST push')


    const animals = ['vaca', 'cabra', 'oveja', 'cerdo', 'caballo']
    
    {
    console.log('CASE: 1')
    // utilizacion del metodo push existente
    // const total = animals.push('elefante')

    // replicar la linea de codigo de arriba para usarlo con nuestra funcion push
    const result = push(animals, 'elefante')


    console.assert(result === 6)
    console.assert(typeof result === 'number')
    console.assert(animals[5]==='elefante')
    console.assert(typeof animals[5] ==='string')
    }


    {
    console.log('CASE: 2')

    const animals = ['vaca', 'cabra', 'oveja', 'cerdo', 'caballo']

    const result = push(animals, 'elefante', 'gallina', 'pato', 'pajaro')

    console.assert(result === 9)
    console.assert(typeof result === 'number')
    console.assert(animals[7]==='pato')
    console.assert(typeof (animals[5] && animals[6]) ==='string')
    }




}


*/
{
    console.log('TEST push')


    const animals = ['vaca', 'cabra', 'obeja', 'cerdo', 'caballo']
    
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




}

console.log('TEST push')
//El método push() añade uno o más elementos al final de un array 
// devuelve la nueva longitud del array.

{
    console.log('CASO 1')

    let vegetable = ['tomato','letuce'] //array

    const result = customPush(vegetable, 'potato')

    console.assert(result === 3)
    


}


/*
    const animals = ['vaca', 'cabra', 'oveja', 'cerdo', 'caballo']
    
    
    console.log('CASE: 1')
    // utilizacion del metodo push existente
    // const total = animals.push('elefante')

    // replicar la linea de codigo de arriba para usarlo con nuestra funcion push
    const result = push(animals, 'elefante')


    console.assert(result === 6)
    console.assert(typeof result === 'number')
    console.assert(animals[5]==='elefante')
    console.assert(typeof animals[5] ==='string')
     */
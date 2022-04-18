console.log('TEST PUSH')

{

    console.log('CASO 1')

    const animales = ['cerdo', 'cabra', 'oveja'];

    const count = push(animales, 'vaca');
        
    const expectedResult = ['cerdo', 'cabra', 'oveja', 'vaca']

    console.assert(count === 4)

    for (i in animales)
        console.assert(animales[i] === expectedResult[i])

}

{

    console.log('CASO 2')

    const animales = ['cerdo', 'cabra', 'oveja', 'vaca'];

    const count = push(animales, 'gato', 'pollo', 'perro');

    const expectedResult = ['cerdo', 'cabra', 'oveja', 'vaca', 'gato', 'pollo', 'perro']
    
    console.assert(count === 7)
    
    for (i in animales)
        console.assert(animales[i] === expectedResult[i])
    
}
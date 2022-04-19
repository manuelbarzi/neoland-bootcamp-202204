console.log ('TEST push')

{
    console.log ('Case 1')
    const array = ['ca', 's', 'a'] 
    const element = ['venta', 'puerta'] // elemento a añadir en la array

    push(array , element)

    console.assert(array[0] === 'ca')
    console.assert(array[1] === 's')
    console.assert(array[2] === 'a')
    console.assert(array[3] === 'venta')
    console.assert (array[4] === 'puerta')
   

}
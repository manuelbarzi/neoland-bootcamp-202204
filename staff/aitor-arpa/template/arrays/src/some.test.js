console.log ('TEST some')


{
    console.log ('case 1')

    const array = [1, 2, 3, 4, 5];
    
    const result = some(array, function (element) {
        return element === 4
    })

    console.assert(result === true)

}

// recorer toda el array 
// declarar una variable con nombre elemento que almacene el elemento recorido de la array
// crear una funcion para verificar que el elemento es divisible entre 2
// si uno de los elementos cumple con con la con los requisitos el valor de retorno seria true

describe ('some', function(){
    const container = some (num, even)
    expect(contains).toBe(true)
    test ('return true on element matching callback condition', function (){
        const num = [1,2,3 ,4 ,5]
        const even = element => element % 7 === 0

        const container = some (nums, even)

        expect(contains).toBe (false)
    })
})
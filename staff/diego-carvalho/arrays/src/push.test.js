
console.log('TEST push')

//El método push() añade uno o más elementos al final de un array 
// devuelve la nueva longitud del array.
{
    console.log('CASO 1')

    var vegetable = ['tomato'] //array
    var newVegetable = 'letuce' //elemento que deseo añadir en al final del array

    push(vegetable, newVegetable)

    console.assert(vegetable[0] === 'tomato')
    console.assert(vegetable[1] === 'letuce')

}

{
    console.log('CASO 2')

    var num = [1, 2, 3]
    var newNum = 4,

    push(num, newNum)

    console.assert(num [0] === 1 )
    console.assert(num [1] === 2 )
    console.assert(num [2] === 3 )
    console.assert(num [3] === 4 )
    
}
//function push 
{
    function push(array, element) {
        array.lenght = array.length + element//array.length(tomato) + element(letuce)
        return array.lenght//devolve el array con element(letuce) añadido

    }
}

/*
function push(){
    array=arguments[0]
    for(let i=0; i<arguments.length-1; i++)
        array[array.length]=arguments[i+1]

    return array.length
}
 */

console.log('TEST forEach')

const Lnums = [1, 2, 3, 4]

{
    console.log('CASE 1')
    let sum = 0


    // for each: para cada elemento del array, hazme esto
    forEach(Lnums, function(elem){ // le enviamos el array y la funciona
        sum += elem              // me devuelve un elemento que lo sumo
    })

    console.assert(sum === 10)
}


const Lchars = ['a','b','c','d','e','f','g']
{
    console.log('CASE 2')

    let word = ''
    // for each: para cada elemento del array, hazme esto
    forEach(Lchars, function(char){ // le enviamos el array y la funciona
        word += char              // me devuelve un elemento que lo sumo
    })

    console.assert(word === 'abcdefg')
}
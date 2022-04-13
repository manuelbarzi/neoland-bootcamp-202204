
console.log('TEST map')

const list_nums = [1, 2, 3, 4]

{
    console.log('CASE 1')
    let s = 2

    // map: crea un nuevo array y para cada elemento del array, hazme esto
    const result = map(list_nums, function(elem){ // le enviamos el array y la funcion
        return elem += s              // le sumo s a cada elemento y la DEVUELVO
    })

    console.assert(result[0]===3)
    console.assert(result[1]===4)
    console.assert(result[2]===5)
    console.assert(result[3]===6)
}


const list_chars = ['a','b','c','d','e','f','g']
{
    console.log('CASE 2')

    const ler = 'Letra: '

    // map: crea un nuevo array y para cada elemento del array, hazme esto
    const result = map(list_chars, function(elem){ // le enviamos el array y la funciona
        return ler.concat(elem)            // cambio 'a' por 'Letra: a' y la DEVUELVO
    })

    console.assert(result[0]==='Letra: a')
    console.assert(result[1]==='Letra: b')
    console.assert(result[2]==='Letra: c')
    console.assert(result[3]==='Letra: d')
    console.assert(result[4]==='Letra: e')
    console.assert(result[5]==='Letra: f')
    console.assert(result[6]==='Letra: g')
}

const paises = ['España','Argentina','Francia','Alemania','Brasil','Rusia','China']
{
    console.log('CASE 3')

    // map: crea un nuevo array y para cada elemento del array, hazme esto
    const result = map(paises, function(elem){ // le enviamos el array y la funciona
        const cap = elem.substring(0,2).toUpperCase()
        return cap             // cambio 'a' por 'Letra: a'
    })

    console.assert(result[0]==='ES')
    console.assert(result[1]==='AR')
    console.assert(result[2]==='FR')
    console.assert(result[3]==='AL')
    console.assert(result[4]==='BR')
    console.assert(result[5]==='RU')
    console.assert(result[6]==='CH')
}


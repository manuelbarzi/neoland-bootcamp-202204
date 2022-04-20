console.log('TEST slice') 

{
    console.log('CASE 1')

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    const result = ['camel', 'duck', 'elephant'] 
    const start = 2

    slice(animals, start)

    for(i in animals) {
        console.assert(animals[i] === result[i])
    }
}

{
    console.log('CASE 2')

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    const result = ['camel', 'duck']
    const start = 2
    const end = 4

    slice(animals, start, end)
    console.assert(animals[0] === 'camel')

    for(i in animals) {
        console.assert(animals[i] === result[i])
    }
}

{
    console.log('CASE 3')

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    const result = ["camel", "duck", "elephant"]
    const start = -3

    slice(animals, start)

    console.assert(animals[0] === 'camel')

    for(i in animals) {
        console.assert(animals[i] === result[i])
    }
}
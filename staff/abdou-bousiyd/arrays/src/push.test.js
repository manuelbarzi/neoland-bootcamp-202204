console.log('TEST push')
// describe('TEST push' , function() {
//     test('push one element', )

// })

{
    console.log('CASE 1')
    const names = ['manu', 'jorde', 'jacint'];

    const allNames = push(names, 'nath', 'paula', 'federico')

    const result = ['manu', 'jorde', 'jacint', 'nath', 'paula', 'federico']

    console.assert(allNames.length === 6)

    for (let i = 0; i < names.length; i++) {
        console.assert(names[i] === result[i])
    }

}

{
    console.log('CASE 2')
    const names = ['manu', 'jorde', 'jacint'];

    const allNames = push(names, 'nath')

    const result = ['manu', 'jorde', 'jacint', 'nath']

    console.assert(allNames.length === 4)

    for (let i = 0; i < names.length; i++) {
        console.assert(names[i] === result[i])
    }

}
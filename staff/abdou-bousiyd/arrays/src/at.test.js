console.log('TEST at')

{
    const foo = ['a', 'c', 'b','e','c']
    const index = 2
    console.log('CASE 1')
    const res1 = at(foo, index)
    console.assert(res1 === 'b')
}

{
    const foo = ['a', 'c', 'b','e','c']
    const index = -2
    console.log('CASE 2')
    const res1 = at(foo, index)
    console.assert(res1 === 'e')
}
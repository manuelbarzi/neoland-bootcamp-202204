console.log('TEST includes')

const chars = ['a', 'b', 'c', 'd', 'e', 'f']

{
    console.log('CASE 1')
    const result = includes(chars, 'd')
    //console.assert(result === true)
    console.assert(result)
}

{
    console.log('CASE 2')
    const result = includes(chars, 'j')
    //console.assert(result === false)
    console.assert(!result)
}

const nums = [100, 104, 203, 506]

{
    console.log('CASE 3')
    const result = includes(nums, 1000)
    console.assert(result === false)
}

{
    console.log('CASE 4')
    const result = includes(nums, 203)
    console.assert(result === true)
}
console.log('TEST includes')

const array = ['a', 'b', 'c', 'd', 'e', 'f']
let letra = 'd'

{
    console.log('CASE 1')
    const result = includes(array, letra)
    console.assert(result == true)
    console.assert(includes(array, 'd') == true)
    console.assert(includes(array, 'j') == false)
}
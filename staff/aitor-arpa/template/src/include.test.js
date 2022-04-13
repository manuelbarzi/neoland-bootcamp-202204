console.log('TEST include')


let element = ['a', 'b', 'c', 'd', 'e', 'f','7'];
let pos = 2
{
console.log('CASE 1')

console.assert(include(element,'b') === true)

}

{
    console.log ('CASE 2')

    console.assert(include(element,7) === false )
}

{
const result = include(element , '7' ) 

console.assert(result === true)


}


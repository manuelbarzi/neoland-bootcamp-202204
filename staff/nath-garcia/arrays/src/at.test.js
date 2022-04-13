console.log('TEST AT')

const array7 = [5, 12, 8, 130, 44]

{
    console.log('CASE 1')
    let index = 2;
    console.assert(at(array7, index) === 8)
}

{
    console.log('CASE 2')
    let index = -2;
    console.assert(at(array7, index) === 130)
}
{
    console.log('CASE 3')
    let index = 0;
    console.assert(at(array7, index) === 5)
}

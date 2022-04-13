console.log('TEST AT')

const array7 = [5, 12, 8, 130, 44];

{
    let index = 2;
    console.assert(at(array7, index) === 8)
}

{
    let index = -2;
    console.assert(at(array7, index) === 130)

}

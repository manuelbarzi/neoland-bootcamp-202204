
describe('at', function () {
    const list = [5, 11, 8, 130, 42, 56, 3, 24]

    it('positive index', function() {
        const result = at(list, 3)
        //console.assert(result === 130)
        expect(result).toBe(130)
        console.assert(at(list, 0) === 5)
        console.assert(at(list, 4) === 42)
        console.assert(at(list, 7) === 24)
    })

    it('negative index', function() {
        console.assert(at(list, -1) === 24)
        console.assert(at(list, -3) === 56)
        console.assert(at(list, -6) === 8)
    })

})







/*
const list = [5, 11, 8, 130, 42, 56, 3, 24]

console.log('TEST at')

{
    console.log('CASE 1')
    const result = at(list, 3)
    console.assert(result === 130)
    console.assert(at(list, 0) === 5)
    console.assert(at(list, 4) === 42)
    console.assert(at(list, 7) === 24)
}

{
    console.log('CASE 2')
    console.assert(at(list, -1) === 24)
    console.assert(at(list, -3) === 56)
    console.assert(at(list, -6) === 8)
}

*/
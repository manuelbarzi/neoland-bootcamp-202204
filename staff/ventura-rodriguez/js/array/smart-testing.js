console.log('%cSmart Testing v1.1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function describe(testDesc, callback) {
    console.log('%cTEST ' + testDesc, 'font-weight: bold; font-size: 16px; color: orange;')

    callback()
}

function test(caseDesc, callback) {
    console.log('CASE ' + caseDesc)

    callback()
}

const it = test

function expect(value) {
    return {
        toBe(expected) {
            if (value !== expected)
                console.error('expected ' + value + ' to be ' + expected)
        },
    }
}

{
    console.log('test map')

    {
        console.log('case 1')
    
        const arr = [1, 2, 3, 4, 5]
    
        const result = arr.map(function(element) {
            return element * 2
        })
    
        console.assert(result[0] === 2)

    }
    {
        console.log('case 2')
    
        const arr = [1, 2, 3, 4, 5]
    
        const result = arr.map(function(element) {
            return element * 5
        })
    
        console.assert(result[0] === 6)

    }
}

describe('test map', () => {
    
    it('mult 2', () => {
        const arr = [1, 2, 3, 4, 5]

        const result = arr.map(function(number){
            return number * 2
        })
        expect(result[0]).toBe(2)
        expect(result[1]).toBe(4)
        expect(result[2]).toBe(6)
        expect(result[3]).toBe(8)
        expect(result[4]).toBe(10)
    })

    it('sum 5', () => {
        const arr = [1, 2, 3, 4, 5]

        const result = arr.map(function(number){
            return number + 5
        })
        expect(result[0]).toBe(6)
        expect(result[1]).toBe(7)
        expect(result[2]).toBe(8)
        expect(result[3]).toBe(9)
        expect(result[4]).toBe(10)
    })
})
console.log('%cSmart Testing v1 Fede', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function describe(testDesc, callback) {
    console.log('%cTEST ' + testDesc, 'font-weight: bold; font-size: 16px; color: orange;')

    callback()
}

function test(caseDesc, callback) {
    console.log('CASE ' + caseDesc)

    callback()
}

function expect(value) {
    return {
        toBe(expected) {
            if (value !== expected)
                console.error('expected ' + value + ' to be ' + expected)
        },
        toEqual(expected) {
            if (value instanceof Array && expected instanceof Array) {
                if (value.length === expected.length) {
                    for (let i = 0; i < value.length; i++) 
                        if (value[i] !== expected[i])
                            console.error('expected' + value[i] + ' to equal ' + expected[i])
                } else 
                    console.error('expected array length ' + value.length + ' to equal ' + expected.length)
            } else if (value !== expected) 
                console.error('expected ' + value + ' to equal ' + expected)
        }
    }
}

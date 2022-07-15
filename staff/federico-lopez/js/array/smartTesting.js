console.log('%cTESTING', 'background-color: black; font-size: 24px; color: white;')

function describe(functionName, callback) {
    console.log('%cTEST ' + functionName, 'color: blue; font-size: 16px');

    callback()
}

function test(caseName, callback) {
    console.log('CASE ' + caseName)

    callback()
}

function expect(value) {
    return {
        toBe(expected){
            if (value !== expected)
                console.error('Expected ' + value + ' to be ' + expected);
        }
    }
}

function checkArrays(array1, array2) {
    for (i in array1) {
        expect(array1[i]).toBe(array2[i]);
        expect(array1.length).toBe(array2.length);
    }
}
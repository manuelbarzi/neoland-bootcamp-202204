function describe(testDesc, callback) {
    console.log('%cTEST ' + testDesc, 'font-weight: bold;');

    callback();
}

function test(caseDesc, callback) {
    console.log('CASE ' + caseDesc);

    callback();
}

const it = test

function expect(value) {
    return {
        toBe(expected) {
            if (value !== expected)
                console.error('expected ' + value + ' to be ' + expected);
        }
    }
}
console.log('%c Smart testing V1.1 ', 'font-size: 20px; color: white; background: linear-gradient(to left, #30CFD0 0%, #330867 100%)')


function describe(testDesc, callback) {
    console.log('%cTEST ' + testDesc, 'font-size: 14px; font-weight: bold;')

    callback()
}

function test(caseDesc, callback){
    console.log('CASE: '+caseDesc)

    callback()
}

const it = test

function expect(value) {
    return {
        toBe(expected){ // closure
            if (value !== expected)
                console.error('expected ' + value + ' to be ' + expected)
        }
    }
}



/*

Ejemplo de prueba
push.test

*/
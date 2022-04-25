console.log('%cSmart testing V1.1', 'font-size: 18px; color: white; background: blue')

// esto hace el scope y pone el título ES LO QUE HACE EL DESCRIBE
function describe(testDesc, callback) {
    console.log('TEST ' + testDesc)

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
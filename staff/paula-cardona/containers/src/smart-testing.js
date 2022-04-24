console.log('%cSmart Testing v1.1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function describe(testDesc, callback) { //creo una función describe (nombre de la función)
    console.log('TEST ' + testDesc)   // escribira TEST y testDesc el nombre que le haya puesto arriba
                                        // ejecuta la función que le ponga dentro, que será la de test
    callback()
}

function test(caseDesc, callback) {   //creo una función para los casos
    console.log('CASE ' + caseDesc) //escribiré le título CASE y el nombre del caso que le pase
                                    // y ejecuta f assert
    callback()
}

const it = test

function expect(value) {
    return {
        toBe(expected) {
            if (value !== expected)  //comparamos dos valores
                console.error('expected ' + value + ' to be ' + expected)  // si son diferentes envia mensaje error
        }                                                               
    }
}


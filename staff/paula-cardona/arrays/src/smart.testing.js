console.log('%c Smart testing V1 ', 'font-size: 20px; color: white; background: linear-gradient(to left, #30CFD0 0%, #330867 100%)')


function describe(testDesc, callback) { // creo una funcion describe
    console.log('%cTEST ' + testDesc, 'font-size: 14px; font-weight: bold; color:#33cc00')     // escribira el titulo TEST y el nombre que le pase
    callback()                          // y ejecuta la funcion que le ponga dentro, que sera la de test
}

function test(caseDesc, callback){     // creo una funcion para los casos
    console.log('CASE: '+caseDesc)     // escribira el titulo CASE y el nobmre del caso que le pase
    callback()                         // y ejecutara las funciones del assert que le pase
}

const it = test  // al test tambien le puedo llamar it

function expect(value) {     
    return {
        toBe(expected){ // closure
            if (value !== expected)                                         //compara dos valores
                console.error('expected ' + value + ' to be ' + expected)   // si son diferentes envia mensaje de error
        }
    }
}





/*

// llamo a la funcion describe
describe ('fill', function(){   // le paso el nombre del titulo, y la funcion test
    test('caso push', function(){ // le paso el nombre del caso, y las funciones a comprobar

        //creo los arrays
        //ejecuto la funcion

        // ejecuto las comprobaciones
        expect(result).toBe(6)
    })

    test('caso push 2', function(){ // le paso el nombre del caso, y las funciones a comprobar

        //creo los arrays
        //ejecuto la funcion

        // ejecuto las comprobaciones
        expect(result).toBe(6)
    })

    
})*/

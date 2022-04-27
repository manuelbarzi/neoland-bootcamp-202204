// definicion closure
console.log('%cSmart Testing v1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function describe(testDesc, callback) { // tipo de metodo que vamos a describir
    console.log('%cTEST ' + testDesc, 'font-weight: bold; font-size: 16px; color: orange;')

    callback()
}

function test(caseDesc, callback) { // descripcion del metodo
    console.log('CASE ' + caseDesc) // imprime por pantalla el CASE ( que ya se lo hemos indicado para que se ponga automatico + la descripcion que le introducimos)

    callback()
}

function expect(value) { // introducimos las expectatibas
    return {
        toBe(expected) {
            if (value !== expected)
                console.error('expected ' + value + ' to be ' + expected)
        }
    }
}


 //EXPECT FEDE   TO BeEcual compara los dos array que sean igual no  mira referencia de memoria


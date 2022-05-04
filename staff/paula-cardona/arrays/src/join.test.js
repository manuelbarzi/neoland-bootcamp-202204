describe('join', function(){

    test('with ,', function(){
        const elements = ['Fire', 'Air', 'Water'];
        const result = join (elements, ',')
    
    expect(result).toBe('Fire,Air,Water')
    })
    

    test('without space', function(){
        const elements = ['Fire', 'Air', 'Water'];
        const result = join (elements, '')
    
    expect(result).toBe('FireAirWater')
    })


    test('with -', function(){
        const elements = ['Fire', 'Air', 'Water'];
        const result = join (elements, '-')
    
    expect(result).toBe('Fire-Air-Water')
    })

    test('with *', function(){
        const elements = ['Fire', 'Air', 'Water'];
        const result = join (elements, '*')
    
    expect(result).toBe('Fire*Air*Water')
    })
})









/*-------------------------------------->
console.log('TEST join')

const elements = ['Fire', 'Air', 'Water'];

{
    console.log('CAS0 1')

    const resultado = join(elements)

    console.assert(resultado === 'Fire,Air,Water')
}

{
    console.log('CASO 2')

    const resultado = join(elements, '')

    console.assert(resultado === 'FireAirWater')
}

{
    console.log('CASO 3')

    const resultado = join(elements, '-')

    console.assert(resultado === 'Fire-Air-Water')
}


{
console.log('CASO 4')
const resultado = join(elements, '*')
console.assert(resultado === 'Fire*Air*Water')

}*/
describe('slice', function(){  //Hecho por Jordi

    test('only with start index', function(){
        const animals =  ['ant', 'bison', 'camel', 'duck', 'elephant']

        const result = slice(animals, 2)
         // ['camel', 'duck', 'elephant']

         expect(result.length).toBe(3)
         expect(result[0]).toBe('camel')
         expect(result[1]).toBe('duck')
         expect(result[2]).toBe('elephant')
    })

    test('with star and end indexes', function (){
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

        const result = slice(animals, 2, 4)
        //['camel', 'duck']

        expect(result.length).toBe(2)
        expect(result[0]).toBe('camel')
        expect(result[1]).tobe('duck')
    })

    test('with positive start and negative end indexes', function(){
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

        conts result = slice(animals, 2, -1)
          // ['camel', 'duck']


    })
})                           
describe ('flat', function() {

    it('depth level not defined', function() {
        numeros = [1, 2, 3, [4.1, 4.2, 4.3], 5, 6, 7, 8, 9, 10]

        result = flat(numeros) // crea un nuevo array eliminando el array interior
        expect(result.length).toBe(12) // el array ahora deberia ser mas largo
        expect(result[3]).toBe(4.1) //deberia incluir los objetos del array que estaba en numeros [3]
        expect(result[4]).toBe(4.2) // en las siguientes 3 posiciones
        expect(result[5]).toBe(4.3) // en lugas del 5 y 6 que tenia antes
    })

    it('depth level of 1', function() {
        numeros = [1, 2, 3, [[4.1, 4.2, 4.3]], 5, 6, 7, 8, 9, 10]

        result = flat(numeros, 1) // crea un nuevo array quitando 1 nivel de sub elemento, es decir quedaria igual pero solo con 1 corchetes
        expect(result.length).toBe(10) // el array sigue siendo igual de largo
        expect(result[3][0]).toBe(4.1) // la posicion 3 del array mantiene el sub-array
        expect(result[3][1]).toBe(4.2) 
        expect(result[3][2]).toBe(4.3) 
        expect(result[4]).toBe(5) // y la pos 4 sigue manteniendo el valor 5
    })

    it('depth level of 2', function() {
        numeros = [1, 2, 3, [[4.1, 4.2, 4.3]], 5, 6, 7, 8, 9, 10]

        result = flat(numeros, 2) // crea un nuevo array eliminando los dos sub-arrays anteriores
        expect(result.length).toBe(12) // el array ahora deberia ser mas largo
        expect(result[3]).toBe(4.1) //deberia incluir los objetos del array que estaba en numeros [3]
        expect(result[4]).toBe(4.2) // en las siguientes 3 posiciones
        expect(result[5]).toBe(4.3) // en lugas del 5 y 6 que tenia antes
    })

    it('depth level of 5', function() {
        numeros = [1, 2, 3, [[[[[4.1, 4.2, 4.3]]]]], 5, 6, 7, 8, 9, 10]

        result = flat(numeros, 5) // crea un nuevo array eliminando los 5 sub-arrays anteriores
        expect(result.length).toBe(12) // el array ahora deberia ser mas largo
        expect(result[3]).toBe(4.1) //deberia incluir los objetos del array que estaba en numeros [3]
        expect(result[4]).toBe(4.2) // en las siguientes 3 posiciones
        expect(result[5]).toBe(4.3) // en lugas del 5 y 6 que tenia antes
    })

    it('extreme depth level of 5', function() {
        numeros = [1, 2, 3, [[[[4.1, 4.2, [4.31, 4.32], 4.4]]]], 5, 6, [[[7.111, 7.211]]], 8, [[9.11, 9.21]], 10]
        // expected output = [1, 2, 3, [4.1, 4.2, [4.31, 4.32], 4.4], 5, 6, 7.111, 7.211, 8, 9.11, 9.21, 10]

        result = flat(numeros, 3) // saco 3 niveles, si hay mas solo saco tres, si hay menos saca los que hayan
        expect(result.length).toBe(12) 
        expect(result[3][0]).toBe(4.1) 
        expect(result[3][1]).toBe(4.2) 
        expect(result[3][2][0]).toBe(4.31) // este no lo saca, ni lo debe sacar, esta correcto!
        expect(result[4]).toBe(5) 
        expect(result[6]).toBe(7.111) 
        expect(result[9]).toBe(9.11)
    })

})

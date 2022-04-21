describe ('forEach', function() {

    test('sum all the elements', function() {
        const Lnums = [1, 2, 3, 4]
        let sum = 0
        // for each: para cada elemento del array, hazme esto
        forEach(Lnums, function(elem){ // le enviamos el array y la funciona
            sum += elem              // me devuelve un elemento que lo sumo
        })
        expect(sum).toBe(10)
    })

    test('includes space between the elements', function() {
        const Lchars = ['a','b','c','d','e','f','g']
        let word = ''
        // for each: para cada elemento del array, hazme esto
        forEach(Lchars, function(char){ // le enviamos el array y la funciona
            word += char              // me devuelve un elemento que lo sumo
        })
        expect(word).toBe('abcdefg')
    })

})
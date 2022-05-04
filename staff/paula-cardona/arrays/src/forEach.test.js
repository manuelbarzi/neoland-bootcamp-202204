describe ('forEach', function() {

    it('sum all the elements', function() {
        const nums = [1, 2, 3]
        let sum = 0
        // for each: para cada elemento del array, hazme esto
        forEach(nums, function(elem){ // le enviamos el array y la funcion en el elemento
            sum += elem              // me devuelve un elemento que lo sumo
        })
        expect(sum).toBe(6)
    })

    it('includes space between the elements', function() {
        const chars = ['h','e','l','l','o']
        let word = ''
        // for each: para cada elemento del array, hazme esto
        forEach(chars, function(char){ // le enviamos el array y la funciona
            word += char              // me devuelve un elemento que lo sumo
        })
        expect(word).toBe('hello')
    })

})


/*--------------------------------------->
console.log('TEST forEach')

const nums = [1, 2, 3]

{
    console.log('CASE 1')

    let sum = 0

    forEach(nums, function(num) {
        sum += num
    })

    console.assert(sum === 6)
}

const chars = ['h', 'e', 'l', 'l', 'o']

{
    console.log('CASE 2')

    let word = ''

    forEach(chars, function(char) {
        word += char
    })

    console.assert(word === 'hello')
}*/
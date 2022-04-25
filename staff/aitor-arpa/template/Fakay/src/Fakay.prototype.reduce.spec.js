describe('Fakay.prototype.reduce', function () {
    it('sum all numbers of array', function () {
        const nums = new Fakay(1, 2, 3, 4)
        
        const result = nums.reduce(function(acum, elem){
            return acum + elem
        })
        expect(result).toBe(10)
    })

    it('sum all number with default initial value', function () {
        const nums = new Fakay(1, 2, 3, 4)
        
        const result = nums.reduce(function(acum, elem){
            return acum + elem
        },1)
        expect(result).toBe(11)
    })

    it('reduce array of chars', function () {
        const chars = new Fakay('a', 'b', 'c', 'd', 'e', 'f', 'g')
        
        const result = chars.reduce (function(acum, elem){
            return acum.concat(elem);
        }, 'letras: ')

        expect(result).toBe('letras: abcdefg')
    })

    it('cart products, calculate total price', function () {
        const cart = new Fakay ( 
            {name: 'milk', qty: 2, price: 1.5}, 
            {name: 'kellogs', qty: 3, price: 2}, 
            {name: 'yogurt', qty: 6, price: 1}, 
            {name: 'spaghetti', qty: 2, price: 0.75}, 
            {name: 'apple', qty: 10, price: 0.2})
        
        const result = cart.reduce (function(acum, elem){
            return acum + elem.price * elem.qty;
        }, 0)

        expect(result).toBe(18.5)
    })

    it('sum all colours', function () {
        const colors = new Fakay('yellow', 'blue', 'red', 'green', 'yellow', 'red', 'blue')

        const stats = colors.reduce((accum,color) => {
            if (accum[color] === undefined)
                accum[color] = 1
            else
                accum[color]++
            return accum
        }, {})                           // si no le paso objeto no funciona, hay que modificar texto, porque inicializar a 0 con string no funciona

        expect(stats.yellow).toBe(2)
        expect(stats.blue).toBe(2)
        expect(stats.red).toBe(2)
        expect(stats.green).toBe(1)
    })

})
describe('Fakay.prototype.concat', () => {

    it('should merge two objects', () => {

       // const array1 = ['a', 'b', 'c']
       const array1 = new Fakay('a', 'b', 'c')
       // no hace falta array1.length = 3
       // const array2 = ['d', 'e', 'f']
       const array2 = new Fakay('d', 'e', 'f')
       array2.length = 3

    // const result = concat(array1, array2)
       
        const result = new Fakay()

        result = result.concat(array1, array2)






    })



})
/* console.log ('TEST push')

{
    console.log ('Case 1')
    const array = ['ca', 's', 'a'] 
    const element = ['venta', 'puerta'] // elemento a añadir en la array

    push(array , element)

    console.assert(array[0] === 'ca')
    console.assert(array[1] === 's')
    console.assert(array[2] === 'a')
    console.assert(array[3] === 'venta')
    console.assert (array[4] === 'puerta')
   

} */


describe('push', function () {
    test('Push one element', function(){
        const animals = ['pig','goats','sheep']
        let count = push(animals, 'cows')

        expect(count).tobe(4)
        expect(animals[0]).tobe('pig')
        expect(animals[1]).tobe('goats')
        expect(animals[2]).tobe('sheep')
        expect(animals[3]).tobe('cows')

        count push(animals,'elephants')


        
        expect(count).tobe(5)
        expect(animals[0]).tobe('pig')
        expect(animals[1]).tobe('goats')
        expect(animals[2]).tobe('sheep')
        expect(animals[3]).tobe('cows')
        expect(animals[3]).tobe('elephants')

    })

    test('push multiple elements', function(){
      const animals = ['pig','goats','sheep']   

      let count = push(animals, 'cows', 'koalas', 'lions')

      expect(count).tobe(6)
      expect(animals[0]).tobe('pig')
      expect(animals[1]).tobe('goats')
      expect(animals[2]).tobe('sheep')
      expect(animals[3]).tobe('cows')
      expect(animals[4]).tobe('koalas')
      expect(animals[5]).tobe('lions')
      
      count = push (animas,'elephants','gazelles')

      expect(count).tobe(8)
      expect(animals[0]).tobe('pigs')
      expect(animals[1]).tobe('goats')
      expect(animals[2]).tobe('sheep')
      expect(animals[3]).tobe('cows')
      expect(animals[3]).tobe('koalas')
      expect(animals[3]).tobe('lions')
      expect(animals[3]).tobe('elephants')
      expect(animals[3]).tobe('gazelles')
      
    })
})
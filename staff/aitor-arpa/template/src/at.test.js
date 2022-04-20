/* {console.log('at');

   // TODO
const elem = [5, 12, 8, 130, 44];

let index = 2;

   {

   console.log('caso1')
   const resultado = elem.at(index)
   console.log = at(elem,2)
   console.assert (resultado === 8)
   }

   {
   console.log ('caso2')
   const resultado = at(elem,-2)
   console.assert (resultado === 130)

   }
} */
 // TODO
describe('at', function () {
   const elemento = [5, 12, 8, 130, 44]
   test('Using an index the retur element in pos index', function () {
      
      let index = 2
      expect(at(elemento, index)).toBe(8)
      

   })
   test('Using negative element', function(){
      let index = -2
      expect(at(elemento, index)).toBe(130)


   })
})

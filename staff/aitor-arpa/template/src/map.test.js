
/* {
    console.log ('test map')
    {
        console.log('caso1')
        let cadena = [1, 2, 3, 4]
        let cadenaB = [2, 4, 6, 8]
        


map (cadena, cadenaB)
    }

}
 */

describe('test map', () => {
    
    it('mult 2', () => {
        const arr = [1, 2, 3, 4, 5]

        const result = arr.map(function(number){
            return number * 2
        })
        expect(result[0]).toBe(2)
        expect(result[1]).toBe(4)
        expect(result[2]).toBe(6)
        expect(result[3]).toBe(8)
        expect(result[4]).toBe(10)
    })

    it('sum 5', () => {
        const arr = [1, 2, 3, 4, 5]

        const result = arr.map(function(number){
            return number + 5
        })
        expect(result[0]).toBe(6)
        expect(result[1]).toBe(7)
        expect(result[2]).toBe(8)
        expect(result[3]).toBe(9)
        expect(result[4]).toBe(10)
    })
})
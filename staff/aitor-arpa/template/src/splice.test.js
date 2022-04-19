describe('Splice', function () {
    
    
    
    test('Add one element in position 1', function(){

        let meses = ['Jan', 'March', 'April', 'June']
        
        splice(meses, 1, 0, 'Feb')
        
        
        
        expect(meses[0]).toBe('Jan')
        expect(meses[1]).toBe('Feb')
        expect(meses[2]).toBe('March')
        expect(meses[3]).toBe('April')
        expect(meses[4]).toBe('June')
        expect(meses.length).toBe(5)
        
    })
    
} )
    
    // ["Jan", "Feb", "March", "April", "June"]
/* expect(meses)
    expect(array[0].toBe[array[0])
    expect(array[1].toBe[element])
    expect(array[2].tobe[array[3])
    expect(array[3].toBe[array[4])
    expect(array[4].toBe[array[5])
    expect(array.lengt).toBe 4 )*/

    








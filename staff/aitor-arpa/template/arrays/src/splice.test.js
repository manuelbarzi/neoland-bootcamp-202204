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
    
    test('Remplazo de una propiedad por otra', function () {

        let meses = ['Jan', 'March', 'April', 'June']

        splice(meses,4, 1, 'May')
        //meses ["Jan", "Feb", "March", "April", "May"]

        expect(meses[0]).toBe('Jan')
        expect(meses[1]).toBe('Feb')
        expect(meses[2]).toBe('March')
        expect(meses[3]).toBe('April')
        expect(meses[4]).toBe('May')
        expect(meses.length).toBe(5) 
    })


    
})
    


    








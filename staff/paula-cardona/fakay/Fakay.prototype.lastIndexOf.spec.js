describe('Fakay.prototype.LastIndexOf', function(){

    it('Look for an element that is repeated', function() {
        const animals = new Fakay('Dodo', 'Tiger', 'Penguin', 'Dodo', undefined)
        
        const result = animals.lastIndexOf('Dodo')
        //en el array dame el ultimo indice que empiece en la posicion que diga
        expect(result).toBe(3)

    })

    it('Look for an element that is only once', function (){
        const animals = new Fakay ('Dodo', 'Tiger', 'Penguin', 'Dodo', undefined)
        
        const result = animals.lastIndexOf('Tiger')
        
        expect(result).toBe(1);

    })    

    it('Look for undefined', function() {
        
        const animals= new Fakay ('Dodo', 'Tiger', 'Penguin', 'Dodo', undefined)
        const result = animals.lastIndexOf(undefined)
        
        expect(result).toBe(4);

    })})

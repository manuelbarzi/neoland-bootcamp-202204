describe('Fakay.prototype.Every', function(){
  
    it('check is every number is less than 40', () => {

        const numbs = new Fakay(1, 30, 39, 29, 10, 13);
        
        const isBelowThreshold = (currentValue) => currentValue < 40;
        
        const result = numbs.every(isBelowThreshold)
        
        expect(result).toBe(true)

    })

    it('check if every are numbers', () => {

        const array = new Fakay (1, 30, 39, 'hola', 29, 10, 13);
        
        const allAreNumbers = currentValue => typeof currentValue === 'number';
        
        const result = array.every(allAreNumbers)
        
        expect(result).toBe(false);

    })

})

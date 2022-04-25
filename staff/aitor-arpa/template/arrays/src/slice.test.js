describe('slice', () => {
    
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    test('with start positive and without end', () => {

        const result = slice(animals, 2);
        
        const expectedResult = ["camel", "duck", "elephant"];
        
      
        
    })

    test('with start positive and end', () => {

        const result = slice(animals, 2, 4);
        
        const expectedResult = ["camel", "duck"];
        
        

    })

    test('with start positive and end equal to array.length', () => {

        const result = slice(animals, 1, 5);
        
        const expectedResult = ["bison", "camel", "duck", "elephant"];

        

    })

    test('with start negative and without end', () => {
        
        const result = slice(animals, -2)

        const expectedResult = ["duck", "elephant"]
        
       
    })

    test('with start positive and end negative', () => {

        const result = slice(animals, 2, -1);
        
        const expectedResult = ["camel", "duck"];

        
    })

    test('slice empty', () => {

        const result = slice(animals);
        
        const expectedResult = ["ant", "bison", "camel", "duck", "elephant"];

        

    })

})
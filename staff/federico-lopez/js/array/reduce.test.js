console.log('TEST REDUCE')

{

    console.log('TEST 1')
    
    const array1 = [1, 2, 3, 4];

    
    const sumWithoutInitial = reduce(array1, 
        (previousValue, currentValue) => previousValue + currentValue);

    console.assert(sumWithoutInitial === 10)


}

{

    console.log('TEST 2')
    
    const array1 = [1, 2, 3, 4];

    
    const sumWithInitial = reduce(array1, 
        (previousValue, currentValue) => previousValue + currentValue,
        2
    );

    console.assert(sumWithInitial === 12)


}
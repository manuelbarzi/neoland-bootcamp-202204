console.log('TEST forEach')

{
    console.log('CASE 1')
    
    const array = [1, 2, 3, 4, 5] 
    
    forEach(array, (value, index) => {
        const sum = value + 10
        const result = array[index] = sum
        
        console.assert(result === value + 10)
    })
}



{  
    console.log('Case 2')

    const fruits = ["orange","apple","cherry"];
    let word = ''

    forEach(fruits, function(fruits){
        word += fruits
    })
    console.assert(word === 'orangeapplecherry')
}


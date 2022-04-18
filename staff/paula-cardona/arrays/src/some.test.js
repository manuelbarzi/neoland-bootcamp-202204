console.log ('TEST some')


{
    console.log('TEST 1')
    
    const array = [1, 2, 3, 4, 5];
    const result =some(array, function(element){
        return element === 4

    })
  
console.assert(result ===true)

}

{

    console.log ('Test 2')

    const array = ["blue", "green", "black", "orange", "yellow"]
    const Found = map(array, function(element){
        return Found === "white"

})
console.assert (result===false)

}


    console.log('TEST map')
 
 {
     const array = [1,2,3,4,5,6]
 
     let newArray = map(array, function(element) {
         return element +5
     })
 
     for(let i =0; i < array.length; i++) console.assert(newArray[i] === array[i] +5)
     
     console.log('CASE 1')
 
 }
 
 {
     const array = [1,2,3,4,5,6]
 
     let newArray = map(array, function(element) {
         return element *2
     })
 
     for(let i =0; i < array.length; i++) console.assert(newArray[i] === array[i] *2 )
     
     console.log('CASE 2')
    
 }
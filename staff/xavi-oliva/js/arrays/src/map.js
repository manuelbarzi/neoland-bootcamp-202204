function map(array, callback) {
   
    const newArray = []
    
    for (let i = 0; i < array.length; i++) {

      const element = array[i]
       
      // newArray[i] = array[i]
      newArray[i] = callback(element)
    }
    
    return newArray
 }
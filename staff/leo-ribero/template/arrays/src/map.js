function papo(array, callback){

    let newArray = []
    //bucle 1
    for (i=0; i < array.length; i++) {
      newArray[i] = callback(array[i])
    }
    return newArray
   }
   
   const acronim = papo(words, function (element) {
    return element[0]
   })
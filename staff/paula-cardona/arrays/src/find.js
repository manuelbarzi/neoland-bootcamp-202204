function find (array, callback){

  for (let i=0; i<array.length;i++){
    const currentElement= array[i]
    const resultFunction= callback(currentElement)

    if (resultFunction){ //acordemonos que esta igualado al callback, es decir a las condiciones
      return currentElement
    }
  }
}














































/*function find (array, callback){
    for (let i=0; i<array.length; i++){
        
      const element = array[i]
        const result =callback (element)
        
        if (result) return element

}}*/
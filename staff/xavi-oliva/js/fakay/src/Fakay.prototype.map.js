Fakay.prototype.map = function (callback) {
   
    const result = new Fakay
    
    for (let i = 0; i < this.length; i++) {

      const element = this[i]
       
      // newArray[i] = array[i]
      
      result[i] = callback(element)
      result.length++
      // hay que ir incrementando manualmente
      // puesto que no lo hace automáticamente 
      // como en un array
    }
    
    return result
 }
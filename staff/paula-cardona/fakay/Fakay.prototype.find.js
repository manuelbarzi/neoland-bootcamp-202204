Fakay.prototype.find = function (callback) {

    for (let i=0; i<this.length;i++){
      const currentElement= this[i]
      const resultFunction= callback(currentElement)
  
      if (resultFunction){
        return currentElement
      }
    }
  }
  
  
Fakay.prototype.sort = function() {

  let indice
  let current
  for (let i = 0; i < this.length-1; i++){
      indice = i+1
      for (let j = i+1; j < this.length; j++){
          if (this[j].toString()<this[i].toString() && this[j].toString()<this[indice].toString()){
              indice = j
          }
      }
      if (this[indice].toString()<this[i].toString()){
          current = this[i]
          this[i] = this[indice]
          this[indice] = current
      }
  }

}
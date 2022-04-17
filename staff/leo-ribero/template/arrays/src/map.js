function map(array, callback){

  // creo un nuevo Array vacio
    let newArray = []

  // recorro el array que le doy como primer parámetro
  // enviando en cada pasada la primera letra de cada string dentro de este array
  // como parámetro de la funcion callback()
    for (i=0; i < array.length; i++) {
      newArray[i] = callback(array[i])
    }
    return newArray
   }
   
   const acronim = map(words, function (element) {
    return element[0]
   })
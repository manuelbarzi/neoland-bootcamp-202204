function at(array, index) {
    if (index >= 0) {
        return array[index]
    } else {
        return array[array.length + index]
    }
}

function rgb(r, g, b){
  
    const divide = (num, callback) => {
     return String(callback(Math.round(num / 16))) + String(callback(Math.round(num / 16 % 1 * 16)))
   }
   
   const convert = numb => {
     if (numb <= 9)
       return numb
     else if (numb === 10) 
       return 'A'
     else if (numb === 11)
       return 'B'
     else if (numb === 12)
       return 'C'
     else if (numb === 13)
       return 'D'
     else if (numb === 14)
       return 'E'
     else if (numb === 15)
       return 'F'
   }
   let hex = ''
   return hex.concat(divide(r,convert), divide(g, convert), divide(b, convert))
   
 }
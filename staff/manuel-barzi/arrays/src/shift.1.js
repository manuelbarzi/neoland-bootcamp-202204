function shift(array) {
    /*
    keep first element in ref
    iterate array forwardly
    return first element
    */
   const first = array[0]

   for (let i = 0; i < array.length - 1; i++) {
       const next = array[i + 1]

       array[i] = next
   }

   array.length--

   return first
}

   // creo la funcion pop
   function pop(array) { // le envio el array(que seria igual a number) para borrar el ultimo
    const remove = array[array.length-1]  //aqui array.length -1 para llegar al ultimmo numero del array, y se lo guardo a la variable remove
       if(array.length)
       
        array.length = array.length-1 // a la propiedad length del array, le quito 1, para que sea 1 valor mas corto

    return remove // devuelvo el ultimo valor que me he guardado en remove (34)
}
/*
console.log(result)
// 34

console.log(number)
// [10, 14, 20, 24, 30]*/

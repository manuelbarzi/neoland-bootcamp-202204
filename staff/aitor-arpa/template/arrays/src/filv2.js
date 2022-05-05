function fill( array, value, str, end){ 
    debugger
        if (str === 'undefine' && end === 'undefine' ) {
            for (i= 0; i<array.length; i++){
                array[i]=value
    } elseif ( end === '' )
         for(i= str; i<array.length; i++){
            array[i]=value
    }
}

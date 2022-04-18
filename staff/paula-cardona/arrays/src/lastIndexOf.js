function lastindexOf(array, valor, fromIndex = 0){
    n=-1
    if (fromIndex >= 0){ //se puede optimizar empezando por el final, contando para atras, y devolver el primero
        for (let i=fromIndex; i<array.length; i++)
            if(array[i]===valor)
                n=i
    } 
    else if (fromIndex < 0){
        for (let i=array.length+fromIndex; i>=0; i--)
            if(array[i]===valor)
                n=i
    }
    return n
}
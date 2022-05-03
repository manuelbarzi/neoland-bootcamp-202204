function at(array, position){


    if (position >= 0) {
        return array[position]
    } else {
        return array[(array.length) + position]
    }

    // if(array[array.length - 1] === array[position]){
    //     return array[position]
    // }
    // return array[position]
    
//   array[array.length] === array[3]
//   return array[3]
}  

